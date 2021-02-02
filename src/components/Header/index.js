import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// Redux
import { useSelector } from 'react-redux';

import handleCheckOut from '../../stripe/checkout';
import Menubar from './Menubar';

const useStyles = makeStyles(() => ({
  header: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    color: 'red',
  },
  cart: {
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: '-80%',
    right: '-35%',
  },
}));

const mapState = ({ cart }) => ({
  cartItems: cart.cartItems,
});
const Header = () => {
  const { cartItems } = useSelector(mapState);
  const classes = useStyles();
  const countItems = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  );

  return (
    <div>
      <Grid container className={classes.header}>
        <div className={classes.logo}>
          <h3>RP24de</h3>
        </div>
        <div className={classes.cart}>
          <p
            className={classes.cartCount}
            style={countItems > 9 ? { right: '-75%' } : { right: '-35%' }}
          >
            {countItems}
          </p>
          <ShoppingCartOutlinedIcon />
        </div>
        <Button onClick={() => handleCheckOut(cartItems)} variant="outlined">
          Check out
        </Button>
        <Menubar />
      </Grid>
    </div>
  );
};

export default Header;
