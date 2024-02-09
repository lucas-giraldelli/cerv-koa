import { v4 as uuidv4 } from 'uuid';

class Student {
  id: string;
  name: string | null;
  date_of_birth: string | null;
  guardian: string | null;
  guardian_phone: string | null;
  mother: string | null;
  father: string | null;
  guardian_relationship: string | null;
  allergy: string | null;
  address_id: string;
  level_id: string;

  constructor(
    name: string | null,
    date_of_birth: string | null,
    guardian: string | null,
    guardian_phone: string | null,
    mother: string | null,
    father: string | null,
    guardian_relationship: string | null,
    allergy: string | null,
    address_id: string,
    level_id: string
  ) {
    this.id = uuidv4();
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.guardian = guardian;
    this.guardian_phone = guardian_phone;
    this.mother = mother;
    this.father = father;
    this.guardian_relationship = guardian_relationship;
    this.allergy = allergy;
    this.address_id = address_id;
    this.level_id = level_id;
  }
}

export default Student;
