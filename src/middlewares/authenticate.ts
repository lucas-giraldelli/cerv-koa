import { Context, Next } from 'koa';
import { verify } from 'jsonwebtoken';
import { config } from '../config';

function jwtVerify(token: string) {
  const publicKey = `-----BEGIN PUBLIC KEY-----\n${config.tokenSecret}\n-----END PUBLIC KEY-----`;

  console.log({ token, publicKey });

  return verify(token, publicKey, {
    algorithms: ['RS256']
  });
}

function authenticate() {
  return async function (ctx: Context, next: Next) {
    const token = ctx.header['authorization']?.split(' ')[1];
    if (!token) {
      ctx.status = 401;
      ctx.throw(401, 'Unauthorized');
    } else {
      let jwt;
      try {
        jwt = jwtVerify(token);
      } catch (error) {
        ctx.status = 401;
        ctx.throw(401, 'Unauthorized');
      }

      ctx.state.userInfo = jwt;
      await next();
    }
  };
}

export default authenticate;
