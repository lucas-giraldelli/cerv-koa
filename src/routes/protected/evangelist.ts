import { ContextRouter } from '../../interfaces/ContextRouter';
import { StatusCodes } from 'http-status-codes';

import connection from '../../database/connect';
import Evangelist from '../../models/Evangelist.model';
import { insertAddress } from './address';
import { getAll, getOne } from '../../database/fetch/commons.db';

async function create(ctx: ContextRouter) {
  const {
    name,
    date_of_birth,
    contact,
    email,
    address,
    teij_course,
    local_class,
    student,
    student_course_id
  } = <Evangelist>ctx.request.body;

  if (!address) {
    ctx.status = StatusCodes.UNPROCESSABLE_ENTITY;
    ctx.throw(StatusCodes.UNPROCESSABLE_ENTITY, 'Unprocessable entity');
  }

  const { id: address_id } = await insertAddress(address);

  const evangelist = new Evangelist(
    name,
    date_of_birth,
    contact,
    email,
    address_id,
    teij_course,
    local_class,
    student,
    student_course_id
  );

  await connection('evangelist').insert(evangelist);

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: evangelist
    };
  } catch (err) {
    console.error(err);
  }
}

const evangelist = {
  create,
  getAll: (ctx: ContextRouter) => getAll<Evangelist>(ctx, 'evangelist'),
  getOne: (ctx: ContextRouter) => getOne<Evangelist>(ctx, 'evangelist')
};

export default evangelist;
