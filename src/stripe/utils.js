import { loadStripe } from '@stripe/stripe-js';
let STRIPE_P_KEY =
  'pk_test_51ID5u4GWkqJcBCp877qK9jc4V56M791QSKS8bJxMgklrRNYHBwBM0zr92t6lJLFFsawYQ300HPDyYt8zBZadUiYR004PsGT556';
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_P_KEY);
  }
  return stripePromise;
};

export default getStripe;
