# doc: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:10-alpine

# Home directory for user node (non-root)
RUN mkdir -p /home/node/client_app/node_modules && chown -R node:node /home/node/client_app

# working directory of the application
WORKDIR /home/node/client_app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#switch the user to node
USER node

RUN npm install

# Copy application code with the appropriate permissions to the application directory on the container
# Ensure the application files are owned by the non-root node user
# Bundle app source
COPY --chown=node:node . .

# Expose port on the container and start the application
# EXPOSE 3001

CMD [ "npm", "run", "dev:server" ]
