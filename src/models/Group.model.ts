import { v4 as uuidv4 } from 'uuid';

class Group {
  id: string;
  title: string | null;
  description: string | null;

  constructor(title: string | null, description: string | null) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
  }
}

export default Group;
