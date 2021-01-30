import { useState, useEffect } from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Store from './pages/Store';
import Home from './pages/Home';

function App() {
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
