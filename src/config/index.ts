type Config = {
  port: number;
};

export const config: Config = {
  port: (process.env.PORT && +process.env.PORT) || 7654,
};
