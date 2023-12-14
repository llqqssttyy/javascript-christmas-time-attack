import { SYMBOLS } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class Order {
  #menu;

  #amount;

  constructor(order) {
    const [menu, amount] = order.split(SYMBOLS.orderSeperator);

    Validate.menu(menu);
    Validate.amount(amount);
    this.#menu = menu;
    this.#amount = Number(amount);
  }

  get info() {
    return {
      menu: this.#menu,
      amount: this.#amount,
    };
  }
}

export default Order;
