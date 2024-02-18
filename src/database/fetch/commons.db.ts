import { StatusCodes } from 'http-status-codes';
import omit from 'lodash/omit';
import { FIRST_INDEX } from '../../constants/General.constants';
import { ContextRouter } from '../../interfaces/ContextRouter';
import connection from '../connect';
import { CTXOBJ } from '../../constants/Types.contants';

export async function getOne<T extends CTXOBJ>(
  ctx: ContextRouter,
  tablename: string
) {
  const data: T[] = await connection(tablename).where({
    id: ctx.params.id
  });

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: omit(data[FIRST_INDEX], 'id')
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getAll<T extends CTXOBJ>(
  ctx: ContextRouter,
  tablename: string
) {
  const data: T[] = await connection(tablename).select('*');

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: data
    };
  } catch (err) {
    console.error(err);
  }
}
