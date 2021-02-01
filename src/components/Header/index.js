import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import handleCheckOut from '../../stripe/checkout';

const mapState = ({ cart }) => ({
  cartItems: cart.cartItems,
});
const Header = () => {
  const { cartItems } = useSelector(mapState);
  const countItems = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  );
  const history = useHistory();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <h1>RepairPhone24DE</h1>
      <p>Your Cart {countItems} item </p>
      <Button onClick={() => handleCheckOut(cartItems)} variant="outlined">
        Check out
      </Button>
      <Button onClick={toggleDrawer(true)}>Open burger menu</Button>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <div
          style={{ width: '600px' }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          Hello
          <ListItem>
            {' '}
            <ListItemText
              primary="store"
              onClick={() =>
                setTimeout(() => {
                  history.push('/store');
                }, 250)
              }
            />
          </ListItem>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Header;
