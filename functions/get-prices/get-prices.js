const handler = async (event) => {
  // try {
  //   const subject = event.queryStringParameters.name || 'World'
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: `Hello ${subject}` }),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }
  try {
    const stripe = require('stripe')(process.env.STRIPE_S_KEY);

    const prices = await stripe.prices.list({
      limit: 10,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(prices, null, 2),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
