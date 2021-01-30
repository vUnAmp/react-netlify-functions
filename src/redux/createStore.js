import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import createSagaMiddle from 'redux-saga';

import productReducer from './product/product.reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [sagaMiddleware, logger];

export const store = createStore(
  productReducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
