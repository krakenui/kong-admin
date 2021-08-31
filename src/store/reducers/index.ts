import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import Settings from './Settings';
import Common from './Common';

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        settings: Settings,
        common: Common,
    });

export default createRootReducer;
