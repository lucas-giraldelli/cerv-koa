import Router from '@koa/router';
import healthcheck from './healthcheck';

const routes = new Router();

routes.get('/ping', healthcheck);

export default routes;
