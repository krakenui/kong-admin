import { ConfigProvider } from 'antd';
import HorizontalDefault from 'components/Topbar';
import AppLocale from 'locales';
import HomePage from 'pages/Home';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  const { locale } = useSelector((state: any) => state.settings);
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <HorizontalDefault></HorizontalDefault>

        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default AppRoutes;
