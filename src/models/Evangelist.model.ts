import { v4 as uuidv4 } from 'uuid';

class Evangelist {
  id: string;
  name: string | null;
  date_of_birth: string | null;
  contact: string | null;
  email: string | null;
  address: string | null;
  teij_course: number | null;
  class_location: number | null;
  eee_student: number | null;
  address_id: string;
  group_id: number;
  course_id: number;

  constructor(
    name: string | null,
    date_of_birth: string | null,
    contact: string | null,
    email: string | null,
    address: string | null,
    teij_course: number | null,
    class_location: number | null,
    eee_student: number | null,
    address_id: string,
    group_id: number,
    course_id: number
  ) {
    this.id = uuidv4();
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.contact = contact;
    this.email = email;
    this.address = address;
    this.teij_course = teij_course;
    this.class_location = class_location;
    this.eee_student = eee_student;
    this.address_id = address_id;
    this.group_id = group_id;
    this.course_id = course_id;
  }
}

export default Evangelist;
