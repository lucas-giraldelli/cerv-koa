import { Context, Next } from 'koa';
import { verify } from 'jsonwebtoken';
import { config } from '../config';
import { StatusCodes } from 'http-status-codes';
import { AUTHORIZATION, BEARER } from '../constants/General.constants';

function jwtVerify(token: string) {
  const publicKey = `-----BEGIN PUBLIC KEY-----\n${config.tokenSecret}\n-----END PUBLIC KEY-----`;

  return verify(token, publicKey, {
    algorithms: ['RS256']
  });
}

function authenticate() {
  return async function (ctx: Context, next: Next) {
    const bearer = ctx.header[AUTHORIZATION]?.split(' ')[0];
    const token = ctx.header[AUTHORIZATION]?.split(' ')[1];
    if (!token || bearer !== BEARER) {
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
