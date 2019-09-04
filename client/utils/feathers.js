import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const API_ENDPOINT = 'http://localhost:3030'

const socket = io(API_ENDPOINT, {transports: ['websocket'], forceNew: true})
// const options = {
//   storage: window.localStorage
// }
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication());

// client.service('/users')

export default client
