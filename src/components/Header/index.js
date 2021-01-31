import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';

import getStripe from '../../stripe/utils';

const mapState = ({ cart }) => ({
  cartItems: cart.cartItems,
});
const Header = () => {
  const { cartItems } = useSelector(mapState);
  const countItems = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  );

  const fetchCheckoutSession = async (lineItems) => {
    return fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      body: JSON.stringify(lineItems),
    }).then((res) => res.json());
  };

  const handleCheckOut = async () => {
    const stripe = await getStripe();
    //   Convert to FORMART line_items !
    const lineItems = cartItems.map((cartItem) => ({
      price: cartItem.id,
      quantity: cartItem.quantity,
    }));
    const { id } = await fetchCheckoutSession(lineItems);

    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    if (error) {
      console.log(error);
    }
  };

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
