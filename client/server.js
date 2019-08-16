const express = require('express');
const next = require('next');
/* eslint-disable-next-line no-unused-vars */
const dotenv = require('dotenv').config();
const routes = require('./routes/routes')

const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3001;

const app = next({
  // dir: './src',
  dev
});

const handler = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    // server.get('*', (req, res) => {
    //   return handler(req, res);
    // });

    server.use(handler).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
