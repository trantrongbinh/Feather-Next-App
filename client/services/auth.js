import client from '../utils/feathers';

export function registerAuth (data) {
  return client.service('users').create(data);
}

export function loginAuth (data) {
  const { email, password } = data;

  return client.authenticate({strategy: 'local', email, password});
}
