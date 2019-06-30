/* eslint no-console: 0 */

const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    createServer(handler)
      .listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
