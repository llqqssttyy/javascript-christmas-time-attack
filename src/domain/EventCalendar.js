import {
  CHRISTMAS_PERIOD_END,
  CHRISTMAS_PERIOD_START,
  EVENT_MONTH,
  EVENT_YEAR,
  SPECIAL_DATE,
  WEEKENDS,
} from '../statics/constants.js';
import EVENTS from './models/Events.js';
import Validate from './validators/Validate.js';

class EventCalendar {
  #date;

  constructor(input) {
    Validate.date(input);
    this.#date = Number(input);
  }

  getAvailableEvents(infos) {
    const state = this.#getState(infos);

    return EVENTS.filter((eventObj) => {
      const { isEventAvailable } = eventObj;
      return isEventAvailable(state);
    }).map((eventObj) => eventObj.getEvent());
  }

  get date() {
    return this.#date;
  }

  #getState({ orderCategories, totalPrice }) {
    return {
      isChristmasPeriod: this.#isChristmasPeriod(),
      isWeekend: this.#isWeekend(),
      isSpecialDate: this.#isSpecialDate(),
      orderCategories,
      totalPrice,
    };
  }

  #isChristmasPeriod() {
    return (
      this.#date >= CHRISTMAS_PERIOD_START && this.#date <= CHRISTMAS_PERIOD_END
    );
  }

  #isWeekend() {
    const dayOfWeek = new Date(
      `${EVENT_YEAR}-${EVENT_MONTH}-${this.#date}`,
    ).getDay();
    return WEEKENDS.includes(dayOfWeek);
  }

  #isSpecialDate() {
    return SPECIAL_DATE.includes(this.#date);
  }
}

export default EventCalendar;
