// doc: https://github.com/fridays/next-routes
const routes = require('next-routes')

module.exports = routes()
  .add('home', '/', '/')
  .add('login', '/auth/login', 'auth/login')
  .add('register', '/auth/register', 'auth/register')
  .add('items', '/items', 'items/items')
  .add('post', 'post/:slug', 'posts/[slug]')
