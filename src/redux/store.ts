import {applyMiddleware, compose, createStore } from 'redux';
import {rootReducer} from 'redux/reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware =
  process.env.NODE_ENV !== 'production'
    ? composeEnhancer(applyMiddleware(thunk))
    : applyMiddleware(thunk);

export const state = createStore(rootReducer, middleware);