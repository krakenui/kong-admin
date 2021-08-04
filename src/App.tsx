import './app.less';
import 'assets/styles/global/index.less';

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from 'routes';
import configureStore, { history } from 'store';

const App: React.FC = () => {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoutes></AppRoutes>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
