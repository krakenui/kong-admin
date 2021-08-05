import asyncComponent from 'components/AsyncComponent';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const HomePage = asyncComponent(() => import('pages/Home'));

const AppRoutes: React.FC<any> = () => {
  const match = useRouteMatch();

  return (
    <div className="kd-main-content-wrapper">
      <Switch>
        <Route path={match.url + '/'} component={HomePage} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
