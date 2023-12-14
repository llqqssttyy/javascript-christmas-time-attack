import Validate from './validators/Validate.js';

class EventPlanner {
  #date;

  set date(input) {
    Validate.date(input);
    this.#date = Number(input);
  }
}

export default EventPlanner;
