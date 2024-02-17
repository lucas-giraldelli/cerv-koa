import { ContextRouter } from '../../interfaces/ContextRouter';
import { StatusCodes } from 'http-status-codes';

import connection from '../../database/connect';
import omit from 'lodash/omit';
import Address from '../../models/Address.model';
import Evangelist from '../../models/Evangelist.model';
import { insertAddress } from './address';

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
    student_course
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
    student_course
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
  create
};

export default evangelist;
