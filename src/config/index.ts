type Config = {
  port: number;
  tokenSecret: string;
};

export const config: Config = {
  port: (process.env.PORT && +process.env.PORT) || 7654,
  tokenSecret: 'mySecretKey',
};
