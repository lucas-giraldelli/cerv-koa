import { ContextRouter } from '../interfaces/ContextRouter';
import { StatusCodes } from 'http-status-codes';

import connection from '../database/connect';
import Address from '../models/Address.model';
import omit from 'lodash/omit';
import { FIRST_INDEX } from '../constants/General.constants';

async function getAll(ctx: ContextRouter) {
  const addresses: Address[] = await connection('address').select('*');

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: addresses
    };
  } catch (err) {
    console.error(err);
  }
}

async function create(ctx: ContextRouter) {
  const { street, number, neighborhood, complement, zip_code } = <Address>(
    ctx.request.body
  );

  const address = new Address(
    street,
    number,
    neighborhood,
    complement,
    zip_code
  );

  await connection('address').insert(address);

  try {
    ctx.body = {
      status: StatusCodes.OK,
      data: address
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

const address = {
  getAll,
  create,
  getOne
};

export default address;
