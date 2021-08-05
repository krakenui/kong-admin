import './app.less';
import 'assets/styles/global/index.less';

import { ConfigProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import AppLocale from 'locales';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import AppRoutes from 'routes';
import configureStore, { history } from 'store';

const App: React.FC = () => {
  const store = configureStore({});
  const { locale } = useSelector((state: any) => state.settings);
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ConfigProvider locale={currentAppLocale.antd}>
          <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
            <AppRoutes></AppRoutes>
          </IntlProvider>
        </ConfigProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
