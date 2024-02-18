import { ContextRouter } from '../../interfaces/ContextRouter';
import { StatusCodes } from 'http-status-codes';

import connection from '../../database/connect';
import Level from '../../models/Level.model';
import { getAll } from '../../database/fetch/commons.db';

async function create(ctx: ContextRouter) {
  const { number, class_name, evangelist_id, attendance_id } = <Level>(
    ctx.request.body
  );

  const level = new Level(number, class_name, evangelist_id, attendance_id);

  await connection('level').insert(level);

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: level
    };
  } catch (err) {
    console.error(err);
  }
}

const level = {
  create,
  getAll: (ctx: ContextRouter) => getAll<Level>(ctx, 'level')
};

export default level;
