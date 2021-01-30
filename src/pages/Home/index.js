import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Hello from Home</h1>
      <Link to="/store">Go to Store</Link>
    </div>
  );
};

export default Home;
