const handler = async (event) => {
  try {
    const stripe = require('stripe')(process.env.STRIPE_S_KEY);

    const products = await stripe.products.list({
      limit: 10,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products, null, 2),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
