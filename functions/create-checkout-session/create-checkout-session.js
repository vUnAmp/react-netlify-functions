const redirectUrl = 'http://localhost:8888';
const handler = async (event) => {
  try {
    const stripe = require('stripe')(process.env.STRIPE_S_KEY);
    // console.log(JSON.parse(event.body));
    const session = await stripe.checkout.sessions.create({
      // success_url: 'https://google.com',
      // cancel_url: 'https://google.com',
      success_url: `${redirectUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: redirectUrl,
      payment_method_types: ['card'],
      line_items: [...JSON.parse(event.body)],
      mode: 'payment',
      // Address Shipping required
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['DE'],
      },
    });
    console.log(session);
    return {
      statusCode: 200,
      body: JSON.stringify(session, null, 2),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
