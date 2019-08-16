// doc: https://github.com/fridays/next-routes
const routes = require('next-routes')

module.exports = routes()
.add('home', '/', '/')
.add('items', '/items', 'items/items')
.add('blog', '/blog/:slug')
