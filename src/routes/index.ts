import Router from '@koa/router';
import healthcheck from './healthcheck';
import address from './address';

const routes = new Router();

//** Health check */
routes.get('/ping', healthcheck);

/** Address routes */
routes.get('/address', address.getAll);
routes.post('/address', address.create);
routes.get('/address/:id', address.getOne);

export default routes;
