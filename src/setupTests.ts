// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query: any) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

// ignore act warning
// issues: https://github.com/testing-library/react-testing-library/issues/641
const originalWarn = console.warn.bind(console.warn);
const originalError = console.error.bind(console.error);
beforeAll(() => {
    console.warn = (msg) =>
        !msg.toString().includes('wrapped into act') && originalWarn(msg);
    console.error = (msg) =>
        !msg.toString().includes('wrapped into act') && originalError(msg);
});
afterAll(() => {
    console.warn = originalWarn;
    console.error = originalError;
});
