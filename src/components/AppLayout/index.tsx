import { ConfigProvider } from 'antd';
import AppLocale from 'locales';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MainApp from './MainApp';

const AppLayout: React.FC<any> = () => {
  const match = useRouteMatch();
  const { locale } = useSelector((state: any) => state.settings);
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <Switch>
          <Route path={`${match.url}`} component={MainApp} />
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default AppLayout;
