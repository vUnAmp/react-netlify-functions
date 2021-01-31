import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { useSelector, useDispatch } from 'react-redux';

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

const mapState = (store) => ({
  products: store.products,
});

const ProductList = () => {
  const classes = useStyles();

  const { products } = useSelector(mapState);

  console.log(products);
  return (
    <Grid container className={classes.root} spacing={3} justify="center">
      {products.map((product) => (
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
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
