import { v4 as uuidv4 } from 'uuid';

class Visit {
  id: string;
  visit_date: string | null;
  observation: string | null;

  constructor(visit_date: string | null, observation: string | null) {
    this.id = uuidv4();
    this.visit_date = visit_date;
    this.observation = observation;
  }
}

export default Visit;
