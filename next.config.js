const withSass = require('@zeit/next-sass')
// module.exports = {
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' },
//         '/about': { page: '/about' },
//         '/project/think-telic': { page: '/project/think-telic' },
//         '/project/hernandez2': { page: '/project/hernandez2' },
//         '/project/skills-creative-studios': { page: '/project/skills-creative-studios' },
//         '/project/collection-projects': { page: '/project/collection-projects' }
//       }
//     }
//   }
 
module.exports = withSass()
// const isProd = process.env.NODE_ENV === 'production'
// module.exports = {
//   // You may only need to add assetPrefix in the production.
//   assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
// }