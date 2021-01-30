import productTypes from './product.types';

export const fetchProductsStart = () => ({
  type: productTypes.FETCH_PRODUCT_START,
});

export const storeAllProduct = (data) => ({
  type: productTypes.SET_PRODUCT,
  payload: data,
});
