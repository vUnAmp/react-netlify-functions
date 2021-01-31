export const helperAddToCart = ({ prevCartItems, nextCartItem }) => {
  const cartItemExists = prevCartItems.find(
    (cartItem) => cartItem.id === nextCartItem.id
  );
  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.id === nextCartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  console.log(nextCartItem);
  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: 1,
    },
  ];
};
