import cartTypes from './cart.types';
import { helperAddToCart } from './cart.helpers';

const INITIAL_STATE = {
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: helperAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
