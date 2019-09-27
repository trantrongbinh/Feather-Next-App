// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment-timezone');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const user = context.app.service('users');
    const token = context.result.accessToken;
    const { secret } = options;

    if (!token || !secret) {
      return Promise.reject(new Error('Authentication failed!'));
    }

    jwt.verify(token, secret, async (error, payload) => {
      if (error) {
        return Promise.reject(error);
      }

      const apiTokens = {
        access_token_id: payload.jti,
        refresh_token: crypto.randomBytes(30).toString('hex'),
        expire_ttl: moment().add(1, 'hour'),
        refresh_ttl: moment().add(7, 'days'),
      };

      await user.Model.updateOne(
        {
          email: context.data.email,
        },
        {
          api_tokens: apiTokens,
        }
      );
    });

    return context;
  };
};
