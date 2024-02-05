import Router from '@koa/router';
import { Context } from 'koa';

const healthcheckRoute = new Router();

healthcheckRoute.get(`/ping`, async (ctx: Context) => {
  const { userInfo } = ctx.state;

  console.log(userInfo);

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
