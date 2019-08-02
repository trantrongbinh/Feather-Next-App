import client from '../utils/feathers';

const items = {
  fetchItems() {
    return client.service('items').find()
  }
}

export default items
