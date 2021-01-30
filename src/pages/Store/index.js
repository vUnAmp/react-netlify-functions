// import React, { useEffect, useState } from 'react';

const Store = () => {
  //   const [filter, setFilter] = useState("price_1IF0t0GWkqJcBCp8Sw6ndb4Q");
  //   const [productList, setProductList] = useState([]);
  //   const fetchProductData = async () => {
  //     const data = await fetch(`/.netlify/functions/get-products`, {
  //       method: "POST",
  //       body: filter,
  //     })
  //       .then((res) => res.json())
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     console.log(data.data);
  //     // setProductList(data);
  //     // setFilter(data.data[1].id);
  //   };
  //   const fetchPricesData = async () => {
  //     const data = await fetch(`/.netlify/functions/get-prices`, {
  //       method: "POST",
  //       body: filter,
  //     })
  //       .then((res) => res.json())
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     console.log(data.data);
  //     // setProductList(data);
  //     // setFilter(data.data[1].id);
  //   };
  //   const mergeData = () => {};
  //   useEffect(() => {
  //     fetchProductData();
  //     fetchPricesData();
  //     mergeData();
  //   }, []);
  //   const handleLoadMore = async () => {
  //     fetchData();
  //   };

  return (
    <div>
      <h1>Hello from Store</h1>
      {/* <button onClick={handleLoadMore}>Load more</button> */}
    </div>
  );
};

export default Store;
