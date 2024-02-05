type Config = {
  port: number;
  tokenSecret: string;
};

export const config: Config = {
  port: (process.env.PORT && +process.env.PORT) || 7654,
  tokenSecret:
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw3hUuKyf6MII8nxkqXzR1wmnX7tRhzlOAUYa2mQDvurd/pV+0j5NP8wlHCGhfimWcrYjU7aK5g/y447kKz6/CYTefISi9DxtPO+EbGGv8qjwMWt8VXW3Z2tGpFSAHvUwNNPwr9NitIt/MDxw+l3p/4p2bEnF2+aYYfn78SwqBCERjspCDiCbwGTkFlvvew6f0MyWFJ3JSZZgvoMeY5CFpUNxyTaXVjeJVWUfWP3rp4L+JcI1KDaWymcRqHE7IOscCs4wJzfR6WuaNrq347+B6xGxr7rXRLuBfbHLVWmrAevUhyRl+FVvMzde3o4gfrBREsfF1/0PTcSCnplDnYs8rQIDAQAB',
};
