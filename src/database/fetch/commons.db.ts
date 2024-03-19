import { StatusCodes } from 'http-status-codes';
import omit from 'lodash/omit';
import { FIRST_INDEX } from '../../constants/General.constants';
import { ContextRouter } from '../../interfaces/ContextRouter';
import connection from '../connect';
import { omitId } from '../../utils/utilFunctions';

export async function getOne<T extends {}>(
  ctx: ContextRouter,
  tableName: string,
  joinTable: any = undefined
) {
  let data: Array<T>;

  if (joinTable) {
    data = (await connection(tableName)
      .from(`${tableName} as t`)
      .where({
        't.id': ctx.params.id
      })
      .join(`${joinTable} as jt`, `t.${joinTable}_id`, 'jt.id')) as Array<T>;
  } else {
    data = await connection(tableName).where({
      id: ctx.params.id
    });
  }

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: omitId<T>(data[FIRST_INDEX])
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getAll<T extends {}>(
  ctx: ContextRouter,
  tableName: string
) {
  const data: Array<T> = await connection(tableName).select('*');

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: omitId<T>(data[FIRST_INDEX])
    };
  } catch (err) {
    console.error(err);
  }
}
