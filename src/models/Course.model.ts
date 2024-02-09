import { v4 as uuidv4 } from 'uuid';

class Course {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}

export default Course;
