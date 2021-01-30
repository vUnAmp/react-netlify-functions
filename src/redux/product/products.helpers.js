export const handleFetchProductsData = async () => {
  const pricesData = await fetch('/.netlify/functions/get-prices')
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const productsData = await fetch('/.netlify/functions/get-products')
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return { pricesData, productsData };
};
