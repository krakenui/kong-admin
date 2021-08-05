import HomePage from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default AppRoutes;
