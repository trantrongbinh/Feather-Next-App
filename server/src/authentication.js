const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');

const tokenLogin = require('./hooks/token-login');

module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [async context => {
        if (context.data.strategy === 'local') {
          const query = { email: context.data.email }

          return context.app.service('users').find({ query }).then(users => {
            context.params.payload = { userId: users.data[0]._id, name: users.data[0].name }

            return context
          })
        }
        authentication.hooks.authenticate(config.strategies)
      }],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        tokenLogin(config)
      ]
    }
  });
};
