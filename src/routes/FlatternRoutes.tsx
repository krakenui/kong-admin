import asyncComponent from 'components/AsyncComponent';
import AsyncRoute from 'components/AsyncRoute';
import useIntlMessage from 'hooks/UseIntlMessage';
import React from 'react';
import { Switch } from 'react-router-dom';

const SignInPage = asyncComponent(() => import('pages/Auth/SignIn'));
const AccessDeniedPage = asyncComponent(() => import('pages/Auth/403'));

const FlatternRoutes: React.FC<any> = () => (
  <div className="kdr-main-content-wrapper">
    <Switch>
      <AsyncRoute
        path="/login"
        protect={false}
        exact
        asyncComponent={SignInPage}
        title={useIntlMessage('page.meta.title.auth.login')}
        description={useIntlMessage('page.meta.description.auth.login')}
      />

      <AsyncRoute
        path="/island"
        protect={false}
        exact
        asyncComponent={AccessDeniedPage}
        title={useIntlMessage('page.meta.title.auth.island')}
        description={useIntlMessage('page.meta.description.auth.island')}
      />
    </Switch>
  </div>
);

export default FlatternRoutes;
