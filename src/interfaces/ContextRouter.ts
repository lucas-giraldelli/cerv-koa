import { Context } from 'koa';

export interface ContextRouter extends Context {
  params: {
    [key: string]: string;
  };
}
