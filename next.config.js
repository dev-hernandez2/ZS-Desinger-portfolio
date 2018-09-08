const withSass = require('@zeit/next-sass')
module.exports = withSass()

// module.exports = {
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' }
//       }
//     }
//   }
// const isProd = process.env.NODE_ENV === 'production'
// module.exports = {
//   // You may only need to add assetPrefix in the production.
//   assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
// }