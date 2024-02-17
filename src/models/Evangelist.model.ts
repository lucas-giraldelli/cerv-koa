import { v4 as uuidv4 } from 'uuid';
import Address from './Address.model';

class Evangelist {
  id: string;
  name: string | null;
  date_of_birth: string | null;
  contact: string | null;
  email: string | null;
  address?: Address;
  teij_course: number | null;
  local_class: number | null;
  eee_student: number | null;
  address_id: string;
  group_id?: number | null;
  course_id?: number | null;

  constructor(
    name: string | null,
    date_of_birth: string | null,
    contact: string | null,
    email: string | null,
    teij_course: number | null,
    local_class: number | null,
    eee_student: number | null,
    address_id: string
    //group_id: number | null = null,
    //course_id: number | null = null
  ) {
    this.id = uuidv4();
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.contact = contact;
    this.email = email;
    this.teij_course = teij_course;
    this.local_class = local_class;
    this.eee_student = eee_student;
    this.address_id = address_id;
    //this.group_id = group_id;
    //this.course_id = course_id;
  }
}

export default Evangelist;
