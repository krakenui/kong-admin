import './app.less';
import 'assets/styles/global/index.less';

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import AppRoutes from 'routes';
import configureStore, { history } from 'store';

function App() {
  const store = configureStore({});

  return (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoutes></AppRoutes>
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  );
}

export default App;
