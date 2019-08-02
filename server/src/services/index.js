const users = require('./users/users.service.js');
const items = require('./items/items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(items);
};
