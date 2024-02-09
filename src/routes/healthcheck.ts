import { Context } from 'koa';

async function healthcheck(ctx: Context) {
  const { userInfo } = ctx.state;

  try {
    ctx.body = {
      status: 'success',
      data: 'pong'
    };
  } catch (err) {
    console.error(err);
  }
}

export default healthcheck;
