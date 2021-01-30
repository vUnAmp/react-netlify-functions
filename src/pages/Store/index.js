import React, { useEffect, useState } from 'react';

const Store = () => {
  const [filter, setFilter] = useState('price_1IF0t0GWkqJcBCp8Sw6ndb4Q');
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(`/.netlify/functions/get-products`, {
      method: 'POST',
      body: JSON.stringify(filter),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    console.log(data.data[0].id);
    setFilter(data.data[0].id);
  };
  const handleLoadMore = async () => {
    fetchData();
  };
  return (
    <div>
      <h1>Hello from Store</h1>
      <button onClick={handleLoadMore}>load more</button>
    </div>
  );
};

export default Store;
