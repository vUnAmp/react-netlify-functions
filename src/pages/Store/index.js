import React, { useEffect, useState } from 'react';

const Store = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/.netlify/functions/get-products`, {})
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello from Store</h1>
    </div>
  );
};

export default Store;
