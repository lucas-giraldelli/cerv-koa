import Router from '@koa/router';
import { StatusCodes } from 'http-status-codes';
import { Context } from 'koa';

async function healthcheck(ctx: Context) {
  const { userInfo } = ctx.state;

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: 'pong'
    };
  } catch (err) {
    console.error(err);
  }
}

const routes = new Router();

export default routes.get('/ping', healthcheck);
