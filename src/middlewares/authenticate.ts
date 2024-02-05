import { Context, Next } from 'koa';

function authenticate() {
  return async function (ctx: Context, next: Next) {
    const token = ctx.header['authorization']?.split(' ')[1];
    if (token === undefined) {
      ctx.status = 401;
      ctx.throw(401, 'Unauthorized');
    } else {
      await next();
    }
  };
}

export default authenticate;
