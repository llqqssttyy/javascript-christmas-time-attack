import Validate from '../validators/Validate.js';

import { SYMBOLS } from '../../statics/constants.js';
import { CATEGORIES, MENU_BOARD } from '../../statics/menus.js';

import getValueOfField from '../../utils/getValueOfField.js';

class Order {
  #category;

  #menu;

  #amount;

  #price;

  constructor(order) {
    const [menu, amount] = order.split(SYMBOLS.orderSeperator);

    Validate.menu(menu);
    Validate.amount(amount);
    this.#menu = menu;
    this.#amount = Number(amount);
    this.#setCategoryAndPrice(menu, Number(amount));
  }

  get info() {
    return {
      menu: this.#menu,
      amount: this.#amount,
    };
  }

  get price() {
    return this.#price;
  }

  #setCategoryAndPrice(menu, amount) {
    const category = CATEGORIES.find((category) =>
      getValueOfField(MENU_BOARD, `${category}.${menu}`),
    );
    this.#price = getValueOfField(MENU_BOARD, `${category}.${menu}`) * amount;
  }
}

export default Order;
