import getStripe from './utils';
const handleCheckOut = async (cartItems) => {
  const stripe = await getStripe();

  const fetchCheckoutSession = async (lineItems) => {
    return fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',

      body: JSON.stringify(lineItems),
    }).then((res) => res.json());
  };
  const lineItems = cartItems.map((cartItem) => ({
    price: cartItem.id,
    quantity: cartItem.quantity,
  }));
  const { id } = await fetchCheckoutSession(lineItems);

  const { error } = await stripe.redirectToCheckout({ sessionId: id });
  if (error) {
    console.log(error);
  }
};
export default handleCheckOut;
