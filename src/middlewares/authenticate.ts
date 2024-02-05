import { Context, Next } from 'koa';
import { verify } from 'jsonwebtoken';
import { config } from '../config';

function jwtVerify(token: string) {
  const public_key = `-----BEGIN PUBLIC KEY-----\n${config.tokenSecret}\n-----END PUBLIC KEY-----`;

  console.log({ token, public_key });

  return verify(token, public_key, {
    algorithms: ['RS256'],
  });
}

function authenticate() {
  return async function (ctx: Context, next: Next) {
    const token = ctx.header['authorization']?.split(' ')[1];
    if (token === undefined) {
      ctx.status = 401;
      ctx.throw(401, 'Unauthorized');
    } else {
      let jwt;
      try {
        jwt = jwtVerify(token);
      } catch (error) {
        ctx.status = 401;
        ctx.throw(401, 'unauthorized');
      }

      ctx.state.userInfo = jwt;
      await next();
    }
  };
}

export default authenticate;
