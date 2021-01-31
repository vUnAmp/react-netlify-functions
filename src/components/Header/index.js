import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';

const mapState = ({ cart }) => ({
  cartItems: cart.cartItems,
});
const Header = () => {
  const { cartItems } = useSelector(mapState);
  const countItems = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  );

  const fetchCheckoutSession = async (cartItems) => {
    return fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    }).then((res) => res.json());
  };

  const handleCheckOut = () => {};

  console.log(countItems);
  return (
    <div>
      <h1>RepairPhone24DE</h1>
      <p>Your Cart {countItems} item </p>
      <Button onClick={handleCheckOut} variant="outlined">
        Check out
      </Button>
    </div>
  );
};

export default Header;
