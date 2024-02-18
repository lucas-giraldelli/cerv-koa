import Router from '@koa/router';
import address from './address';
import level from './level';
import evangelist from './evangelist';

const protectedRoutes = new Router();

/** Address routes */
protectedRoutes.get('/address', address.getAll);
protectedRoutes.get('/address/:id', address.getOne);

/** Level routes  */
protectedRoutes.post('/level', level.create);
protectedRoutes.get('/level', level.getAll);

/** Evangelist routes */
protectedRoutes.post('/evangelist', evangelist.create);
protectedRoutes.get('/evangelist', evangelist.getAll);
protectedRoutes.get('/evangelist/:id', evangelist.getOne);

export default protectedRoutes;
