import { Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from 'pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default AppRoutes;
