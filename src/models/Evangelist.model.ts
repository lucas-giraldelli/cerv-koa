import { v4 as uuidv4 } from 'uuid';
import Address from './Address.model';
import { TINYINT } from '../constants/Types.contants';

class Evangelist {
  id: string;
  name: string | null;
  date_of_birth: string | null;
  contact: string | null;
  email: string | null;
  address?: Address;
  address_id: string;
  teij_course: TINYINT | null;
  local_class: TINYINT | null;
  student: TINYINT | null;
  student_course_id: string | null;
  //group_id?: number | null;

  constructor(
    name: string | null,
    date_of_birth: string | null,
    contact: string | null,
    email: string | null,
    address_id: string,
    teij_course: TINYINT | null, // já fez o curso?
    local_class: TINYINT | null, // cerv ou paia?
    student: TINYINT | null,
    student_course_id: string | null
    //group_id: number | null = null,
  ) {
    this.id = uuidv4();
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.contact = contact;
    this.email = email;
    this.address_id = address_id;
    this.teij_course = teij_course;
    this.local_class = local_class;
    this.student = student;
    this.student_course_id = student_course_id;
    //this.group_id = group_id;
  }
}

export default Evangelist;
