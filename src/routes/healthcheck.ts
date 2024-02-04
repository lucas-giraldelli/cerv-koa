import Router from '@koa/router';

const healthcheckRoute = new Router();

healthcheckRoute.get(`/ping`, async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
      data: 'pong',
    };
  } catch (err) {
    console.error(err);
  }
});

export default healthcheckRoute;
