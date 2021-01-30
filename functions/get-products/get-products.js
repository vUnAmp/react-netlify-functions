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
    const stripe = require('stripe')(
      'sk_test_51ID5u4GWkqJcBCp8YECot6MnqAov1jnOAgRaBHeQKU3H9HzURDez9UT2W0JP4JjXHqcxKCbqF8wshCG3FCmDO9NW00XnbWLLst'
    );

    const products = await stripe.products.list({
      limit: 3,
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
// const stripe = require('stripe')(
//   'sk_test_51ID5u4GWkqJcBCp8YECot6MnqAov1jnOAgRaBHeQKU3H9HzURDez9UT2W0JP4JjXHqcxKCbqF8wshCG3FCmDO9NW00XnbWLLst'
// );

// const products = await stripe.products.list({
//   limit: 3,
// });
