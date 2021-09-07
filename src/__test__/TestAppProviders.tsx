import { ConfigProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import AppLocale, { languageData } from 'locales';
import moment from 'moment';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import configureStore, { history } from 'store';
import { loadStorageAuthUserInfo } from 'store/actions';
import { LAYOUT_TYPE_FULL, THEME_TYPE_SEMI_DARK } from 'store/ActionTypes';

const initialState = {
    auth: {
        user: loadStorageAuthUserInfo(),
    },
    settings: {
        layoutType: LAYOUT_TYPE_FULL,
        themeType: THEME_TYPE_SEMI_DARK,
        locale: languageData.find(
            (l) => l.locale === process.env.REACT_APP_TEST_LANG
        ),
    },
};

const AppLayout: React.FC<any> = ({ children }) => {
    const { locale } = useSelector((state: any) => state.settings);
    const currentAppLocale = AppLocale[locale.locale];
    moment.locale(currentAppLocale.locale);

    return (
        <ConfigProvider locale={currentAppLocale.antd}>
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
            >
                <HelmetProvider>{children}</HelmetProvider>
            </IntlProvider>
        </ConfigProvider>
    );
};

const TestAppProvider: React.FC = ({ children }) => {
    const store = configureStore(initialState);

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppLayout>{children}</AppLayout>
            </ConnectedRouter>
        </Provider>
    );
};

export default TestAppProvider;
