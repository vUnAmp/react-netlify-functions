import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h3>Hello from Home</h3>
      <Link to="/store">Go to Store</Link>
    </MainLayout>
  );
};

export default Home;
