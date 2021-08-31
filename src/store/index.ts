import { routerMiddleware } from 'connected-react-router';
import { initRootStore } from 'octopus-immutable-store';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import RouteChangedHandler from './middlewares/RouteChangedHandler';
import createRootReducer from './reducers';

const createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();
const middlewares = [thunk, RouteChangedHandler];

export default function configureStore(preloadedState: any) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                ...middlewares
            )
        )
    );

    // initial immutable store
    // refs durable store
    initRootStore(store);

    return store;
}
