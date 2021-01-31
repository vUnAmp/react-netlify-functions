import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
