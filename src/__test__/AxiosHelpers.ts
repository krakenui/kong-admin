export function mockAxios(action: string, mockFn: any) {
    const defaultSettings: any = {};
    defaultSettings[action] = mockFn;

    jest.mock('axios', () => {
        return {
            create: jest.fn(() => ({
                interceptors: {
                    request: { use: jest.fn(), eject: jest.fn() },
                    response: { use: jest.fn(), eject: jest.fn() },
                },
                ...defaultSettings,
            })),
        };
    });
}
