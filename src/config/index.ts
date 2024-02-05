import 'dotenv/config';

type Config = {
  port: string;
  tokenSecret: string;
};

export const config: Config = {
  port: process.env.PORT || '7654',
  tokenSecret: process.env.TOKEN_SECRET || 'mySecret',
};
