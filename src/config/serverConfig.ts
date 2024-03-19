import 'dotenv/config';

export const config = {
  port: process.env.PORT || '7654',
  tokenSecret: process.env.TOKEN_SECRET || 'mySecret'
};
