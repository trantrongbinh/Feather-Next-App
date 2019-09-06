const feathers = require('@feathersjs/feathers');
const tokenLoginJs = require('../../src/hooks/token-login');

describe('\'token-login\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: tokenLoginJs()
    });
  });

  it('runs the hook', async () => {
    // const result = await app.service('dummy').get('test');
    // expect(result).toEqual({ id: 'test' });
  });
});
