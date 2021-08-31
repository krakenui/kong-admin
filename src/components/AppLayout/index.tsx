import { ConfigProvider } from 'antd';
import AppLocale from 'locales';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

import FlatternApp from './FlatternApp';
import MainApp from './MainApp';

const AppLayout: React.FC<any> = () => {
  const match = useRouteMatch();
  const { locale } = useSelector((state: any) => state.settings);
  const currentAppLocale = AppLocale[locale.locale];
  moment.locale(currentAppLocale.locale);

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <HelmetProvider>
          <Switch>
            <Route path={match.url + 'portal'} component={MainApp} />
            <Route path={match.url} exact>
              <Redirect to={match.url + 'portal'} />
            </Route>
            <Route path="*" component={FlatternApp} />
          </Switch>
        </HelmetProvider>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default AppLayout;
