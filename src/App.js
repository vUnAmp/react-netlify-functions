import { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { fetchProductsStart } from './redux/product/product.actions';
import { useDispatch } from 'react-redux';

import './App.css';
import Store from './pages/Store';
import Home from './pages/Home';
import Success from './pages/Success';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
