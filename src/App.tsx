import './app.less';
import 'assets/styles/global/index.less';
import 'assets/styles/kong-react-admin.less';

import AppLayout from 'components/AppLayout';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from 'store';

const App: React.FC = () => {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppLayout></AppLayout>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
