import { fireBtnClick, fireInputText } from '__test__/EventHelpers';
import { cleanup, render, screen } from '__test__/TestAppRender';
import { delay } from '__test__/Utils';
import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SignInPage from './SignIn';

const server = setupServer();
const loginAdminSuccessResp = {
    accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTYzMTAwMjQ4OCwiZXhwIjoxNjMxMDA2MDg4LCJzdWIiOiIyIn0.kbpe0c98FtJrlodx51aCZAbLQII-mZtAPm2Z6DKNfwQ',
    user: {
        id: 2,
        name: 'Nico Robin',
        email: 'admin@email.com',
        roles: 'admin',
    },
};

const setup = () => {
    const { container } = render(<SignInPage />);

    return { container };
};

beforeAll(() => server.listen());

afterEach(() => {
    cleanup();
    server.resetHandlers();
    window.localStorage.clear();
});

afterAll(() => server.close());

test('Should be render login forms', () => {
    const { container } = setup();

    const formElm = container.querySelector('form[id="login-form"]');
    expect(formElm).not.toBeNull();
    expect(formElm).toBeVisible();

    const emailElm = container.querySelector('input[id="login-form_email"]');
    expect(emailElm).not.toBeNull();
    expect(emailElm).toBeVisible();

    const passwdlElm = container.querySelector(
        'input[id="login-form_password"]'
    );
    expect(passwdlElm).not.toBeNull();
    expect(passwdlElm).toBeVisible();

    const submitBtnElm = container.querySelector('[type="submit"]');
    expect(submitBtnElm).not.toBeNull();
    expect(submitBtnElm).toBeVisible();
});

test('Should be login success with valid user info', async () => {
    const { container } = setup();

    server.use(
        rest.post('/api/auth/login', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(loginAdminSuccessResp));
        })
    );

    const successMessageRegex =
        process.env.REACT_APP_TEST_LANG === 'ja'
            ? /ログインに成功しました/im
            : /Login was successful/i;

    const emailElm = fireInputText(
        container,
        'input[id="login-form_email"]',
        'admin@email.com'
    );
    const passwordElm = fireInputText(
        container,
        'input[id="login-form_password"]',
        'admin'
    );
    expect(emailElm.value).toBe('admin@email.com');
    expect(passwordElm.value).toBe('admin');

    const submitBtnElm: any = fireBtnClick(container, 'button[type="submit"]');
    expect(submitBtnElm).not.toBe(null);

    // wait store append -> execute middlewares -> store to
    await delay(500);
    const notifyCotainerElm = screen.getByText(successMessageRegex);
    expect(notifyCotainerElm).toBeInTheDocument();

    const storedToken = window.localStorage.getItem('accessToken');
    const storedUserInfo = window.localStorage.getItem('AUTH_USER_INFO');
    expect(storedToken).not.toBeNull();
    expect(storedUserInfo).not.toBeNull();

    if (storedUserInfo != null) {
        const userInfoObj = JSON.parse(storedUserInfo);
        expect(userInfoObj).not.toBeNull();
        expect(userInfoObj.email).toEqual('admin@email.com');
    }
});

test('Should show alert when wrong password', async () => {
    const { container } = setup();

    server.use(
        rest.post('/api/auth/login', (req, res, ctx) => {
            return res(ctx.status(400), ctx.text('Cannot find user'));
        })
    );

    const failMessageRegex =
        process.env.REACT_APP_TEST_LANG === 'ja'
            ? /ログインに失敗しました再試行してください/im
            : /Login failed, please try again/i;

    const emailElm = fireInputText(
        container,
        'input[id="login-form_email"]',
        'admin@email.com'
    );
    const passwordElm = fireInputText(
        container,
        'input[id="login-form_password"]',
        'admin1'
    );
    expect(emailElm.value).toBe('admin@email.com');
    expect(passwordElm.value).toBe('admin1');

    const submitBtnElm: any = fireBtnClick(container, 'button[type="submit"]');
    expect(submitBtnElm).not.toBe(null);

    // wait store append -> execute middlewares -> store to
    await delay(500);
    const notifyCotainerElm = screen.getByText(failMessageRegex);
    expect(notifyCotainerElm).toBeInTheDocument();

    const storedToken = window.localStorage.getItem('accessToken');
    const storedUserInfo = window.localStorage.getItem('AUTH_USER_INFO');
    expect(storedToken).toBeNull();
    expect(storedUserInfo).toBeNull();
});
