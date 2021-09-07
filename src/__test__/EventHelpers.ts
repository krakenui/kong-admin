import { fireEvent } from '@testing-library/react';

export function fireInputText(container: any, selector: string, value: string) {
    const inputElm: any = container.querySelector(selector);

    if (inputElm != null) {
        fireEvent.change(inputElm, { target: { value: value } });
    }

    return inputElm;
}

export function fireBtnClick(container: any, selector: string) {
    const submitBtnElm: any = container.querySelector(selector);

    if (submitBtnElm != null) {
        fireEvent.click(submitBtnElm);
    }

    return submitBtnElm;
}
