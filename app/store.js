import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import heroReducer from './reducers/heroes';
import heroRed from './reducers/hero';

var reducers = combineReducers({
    heroReducer: heroReducer,
    heroRed: heroRed
});

var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;