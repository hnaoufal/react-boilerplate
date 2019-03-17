import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = (middlewares => {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    return compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }
  return applyMiddleware(...middlewares);
})([sagaMiddleware]);

export const store = createStore(reducer, window.initialState, middleware);

sagaMiddleware.run(sagas);
