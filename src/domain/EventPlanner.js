import { SYMBOLS } from '../statics/constants.js';
import Order from './models/Order.js';
import Validate from './validators/Validate.js';

class EventPlanner {
  #date;

  #orders = [];

  set date(input) {
    Validate.date(input);
    this.#date = Number(input);
  }

  set orders(input) {
    Validate.order(input);
    this.#orders = input
      .split(SYMBOLS.seperator)
      .map((order) => new Order(order));
  }

  get orders() {
    return this.#orders.map((order) => order.info);
  }

  get totalPrice() {
    return this.#orders.reduce((totalPrice, order) => {
      return (totalPrice += order.price);
    }, 0);
  }
}

export default EventPlanner;
