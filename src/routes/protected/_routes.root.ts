import Router from '@koa/router';
import address from './address';
import level from './level';
import evangelist from './evangelist';

const protectedRoutes = new Router();

/** Address routes */
protectedRoutes.get('/address', address.getAll);
protectedRoutes.post('/address', address.create);
protectedRoutes.get('/address/:id', address.getOne);

/** Level routes  */
protectedRoutes.get('/level', level.getAll);
protectedRoutes.post('/level', level.create);

/** Evangelist routes */
protectedRoutes.post('/evangelist', evangelist.create);

export default protectedRoutes;
