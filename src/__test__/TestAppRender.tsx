import { render } from '@testing-library/react';
import TestAppProvider from '__test__/TestAppProviders';

const customRender = (ui: any, options?: any) =>
    render(ui, { wrapper: TestAppProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
