import { v4 as uuidv4 } from 'uuid';

class Level {
  id: string;
  number: number | null;
  class_name: string | null;
  evangelist_id: string;
  attendance_id: string;

  constructor(
    number: number | null,
    class_name: string | null,
    evangelist_id: string,
    attendance_id: string
  ) {
    this.id = uuidv4();
    this.number = number;
    this.class_name = class_name;
    this.evangelist_id = evangelist_id;
    this.attendance_id = attendance_id;
  }
}

export default Level;
