import { Context, Next } from 'koa';
import { verify } from 'jsonwebtoken';
import { config } from '../config';
import { StatusCodes } from 'http-status-codes';

function jwtVerify(token: string) {
  const publicKey = `-----BEGIN PUBLIC KEY-----\n${config.tokenSecret}\n-----END PUBLIC KEY-----`;

  return verify(token, publicKey, {
    algorithms: ['RS256']
  });
}

function authenticate() {
  return async function (ctx: Context, next: Next) {
    const token = ctx.header['authorization']?.split(' ')[1];
    if (!token) {
      ctx.status = StatusCodes.UNAUTHORIZED;
      ctx.throw(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    } else {
      let jwt;
      try {
        jwt = jwtVerify(token);
      } catch (error) {
        ctx.status = StatusCodes.UNAUTHORIZED;
        ctx.throw(StatusCodes.UNAUTHORIZED, 'Unauthorized');
      }

      ctx.state.userInfo = jwt;
      await next();
    }
  };
}

export default authenticate;
