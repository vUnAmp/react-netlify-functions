import { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { fetchProductsStart } from './redux/product/product.actions';
import { useDispatch } from 'react-redux';

import './App.css';
import Store from './pages/Store';
import Home from './pages/Home';

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
      </Switch>
    </div>
  );
}

export default App;
