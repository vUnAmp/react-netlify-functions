import { all, call } from 'redux-saga/effects';

import productsSagas from './product/product.sagas';

export default function* rootSaga() {
  yield all([call(productsSagas)]);
}
