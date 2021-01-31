import cartTypes from './cart.types';

export const addCartIem = (item) => ({
  type: cartTypes.ADD_TO_CART,
  payload: item,
});
