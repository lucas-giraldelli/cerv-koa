import { v4 as uuidv4 } from 'uuid';

class Address {
  id: string;
  street: string | null;
  number: string | null;
  neighborhood: string | null;
  complement: string | null;
  zip_code: string | null;

  constructor(
    street: string | null,
    number: string | null,
    neighborhood: string | null,
    complement: string | null,
    zip_code: string | null
  ) {
    this.id = uuidv4();
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.complement = complement;
    this.zip_code = zip_code;
  }
}

export default Address;
