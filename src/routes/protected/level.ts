import { ContextRouter } from '../../interfaces/ContextRouter';
import { StatusCodes } from 'http-status-codes';

import connection from '../../database/connect';
import Address from '../../models/Address.model';
import omit from 'lodash/omit';
import { FIRST_INDEX } from '../../constants/General.constants';
import Level from '../../models/Level.model';

async function getAll(ctx: ContextRouter) {
  const levels: Level[] = await connection('level').select('*');

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: levels
    };
  } catch (err) {
    console.error(err);
  }
}

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

async function getOne(ctx: ContextRouter) {
  const address: Address[] = await connection('address').where({
    id: ctx.params.id
  });

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: omit(address[FIRST_INDEX], 'id')
    };
  } catch (err) {
    console.error(err);
  }
}

const level = {
  getAll,
  create,
  getOne
};

export default level;
