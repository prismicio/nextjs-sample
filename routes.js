const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('home', '/', '/index');
routes.add('second', '/second');
routes.add('speakers', '/speakers');
routes.add('speaker', '/speakers/:uid');
routes.add('articles', '/articles');
routes.add('article', '/articles/:uid');
routes.add('preview', '/preview');
routes.add('notfound', '/*');
