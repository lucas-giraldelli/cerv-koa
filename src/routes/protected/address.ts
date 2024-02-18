import connection from '../../database/connect';
import { getAll, getOne } from '../../database/fetch/commons.db';
import { ContextRouter } from '../../interfaces/ContextRouter';
import Address from '../../models/Address.model';

export async function insertAddress(addr: Address) {
  const { street, number, neighborhood, complement, zip_code } = addr;

  const address = new Address(
    street,
    number,
    neighborhood,
    complement,
    zip_code
  );

  await connection('address').insert(address);

  return address;
}

const address = {
  getAll: (ctx: ContextRouter) => getAll<Address>(ctx, 'address'),
  getOne: (ctx: ContextRouter) => getOne<Address>(ctx, 'address')
};

export default address;
