import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import { useSelector, useDispatch } from 'react-redux';

import { addCartIem } from '../../redux/cart/cart.actions';

import './productlist.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1080,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  maxWidth: {
    maxWidth: 545,
    margin: '0 auto',
    backgroundColor: '#fbf4f4',
  },
  headerTitle: {
    fontSize: 18,
  },
}));

const mapState = ({ product, cart }) => ({
  products: product.products,
  cartItems: cart.cartItems,
});

const ProductList = () => {
  const classes = useStyles();

  const { products, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();

  console.log(products);
  console.log(cartItems);
  // const formatPrice = ({ amount, currency = 'eur', quantity = 1 }) => {
  //   const numberFormat = new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency,
  //     currencyDisplay: 'symbol',
  //   });
  //   const parts = numberFormat.formatToParts(amount);
  //   let zeroDecimalCurrency = true;
  //   for (let part of parts) {
  //     if (part.type === 'decimal') {
  //       zeroDecimalCurrency = false;
  //     }
  //   }
  //   amount = zeroDecimalCurrency ? amount : amount / 100;
  //   const total = (quantity * amount).toFixed(2);
  //   return numberFormat.format(total);
  // };

  const handleAddToCart = ({ id, price }) => {
    dispatch(addCartIem({ id, price }));
  };
  return (
    <Grid container className={classes.root} spacing={3} justify="center">
      {products.map((product) => {
        const price = (product.price / 100).toFixed(2);
        return (
          <Grid item xs={12} md={6} key={product.id}>
            <Card className={classes.maxWidth}>
              <CardMedia className={classes.media} image={product.images[0]} />
              <CardHeader
                title={product.name}
                /////   Overriden CSS /////
                classes={{
                  title: classes.headerTitle,
                }}
                /////   Overriden CSS /////
              />
              <CardActions style={{ justifyContent: 'space-around' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleAddToCart({ id: product.priceId, price })
                  }
                >
                  Add Cart
                </Button>
                <p> €{price} </p>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
