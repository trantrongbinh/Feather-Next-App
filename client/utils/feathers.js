import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const API_ENDPOINT = 'http://localhost:3030'

const socket = io(API_ENDPOINT, {transports: ['websocket'], forceNew: true})
const options = {}
const client = feathers();

if (typeof window !== 'undefined') {
  options.storage = window.localStorage;
}

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication(options));

export default client
