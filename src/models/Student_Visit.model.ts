import { v4 as uuidv4 } from 'uuid';

class StudentVisitBridge {
  id: string;
  student_id: string;
  student_address_id: string;

  constructor(student_id: string, student_address_id: string) {
    this.id = uuidv4();
    this.student_id = student_id;
    this.student_address_id = student_address_id;
  }
}

export default StudentVisitBridge;
