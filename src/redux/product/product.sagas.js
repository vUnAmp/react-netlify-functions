import { takeLatest, put, all, call } from 'redux-saga/effects';
import productTypes from './product.types';

import { handleFetchProductsData } from './products.helpers';
import { storeAllProduct } from './product.actions';

export function* fetchProducts() {
  const products = yield handleFetchProductsData();

  const { pricesData, productsData } = products;
  const allProducts = productsData.data.map((product, i) => {
    let price = pricesData.data[i].unit_amount;
    return {
      ...product,
      price,
    };
  });

  yield put(storeAllProduct(allProducts));
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onFetchProductsStart)]);
}
