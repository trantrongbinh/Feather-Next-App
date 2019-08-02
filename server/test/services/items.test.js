const assert = require('assert');
const app = require('../../src/app');

describe('\'items\' service', () => {
  it('registered the service', () => {
    const service = app.service('items');

    assert.ok(service, 'Registered the service');
  });
});
