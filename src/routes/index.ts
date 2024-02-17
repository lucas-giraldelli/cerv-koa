import Router from '@koa/router';
import healthcheck from './healthcheck';
import address from './protected/address';
import level from './protected/level';
import evangelist from './protected/evangelist';

const routes = new Router();

//** Health check */
routes.get('/ping', healthcheck);

/** Address routes */
routes.get('/address', address.getAll);
routes.post('/address', address.create);
routes.get('/address/:id', address.getOne);

/** Level routes  */
routes.get('/level', level.getAll);
routes.post('/level', level.create);

/** Evangelist routes */
routes.post('/evangelist', evangelist.create);

export default routes;
