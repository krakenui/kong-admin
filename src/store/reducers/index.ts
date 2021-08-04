import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import Settings from './Settings';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
  });

export default createRootReducer;
