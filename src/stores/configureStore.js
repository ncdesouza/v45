/**
 * Created by nicholas on 21/01/16.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

import reducer from '../reducers/AppReducer';

//const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware
  ),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

)(createStore);


export default function configureStore(initialState = null) {
  return initialState ?
    createStoreWithMiddleware(reducer, initialState) :
    createStoreWithMiddleware(reducer)
};
