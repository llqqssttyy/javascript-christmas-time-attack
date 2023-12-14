import { ORDER_AMOUNT_MIN, SYMBOLS } from '../statics/constants.js';
import EventCalendar from './EventCalendar.js';
import { GIFT } from './models/Events.js';
import Order from './models/Order.js';
import Validate from './validators/Validate.js';

class EventPlanner {
  #eventCalendar;

  #orders = [];

  #availableEvents = {};

  findAvailableEvents() {
    const orderCategories = this.#getOrderCategories();
    const totalPrice = this.totalPrice;

    this.#availableEvents = this.#eventCalendar.getAvailableEvents({
      orderCategories,
      totalPrice,
    });
  }

  set date(input) {
    this.#eventCalendar = new EventCalendar(input);
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

  get benefits() {
    if (this.totalPrice <= ORDER_AMOUNT_MIN) return {};

    const conditions = {
      orderCntByCategory: this.#getOrderCntByCategory(),
      date: this.#eventCalendar.date,
    };

    return this.#availableEvents.reduce((benefits, { name, getBenefit }) => {
      benefits[name] = getBenefit(conditions);
      return benefits;
    }, {});
  }

  get gift() {
    return this.benefits[GIFT];
  }

  get totalBenefit() {
    return Object.values(this.benefits).reduce((total, { amount, price }) => {
      return (total += amount * price);
    }, 0);
  }

  // 주문한 카테고리
  #getOrderCategories() {
    const orderCategories = this.#orders.reduce((orderCategories, order) => {
      orderCategories.add(order.info.category);
      return orderCategories;
    }, new Set());
    return [...orderCategories];
  }

  // 카테고리 별 주문 수량
  #getOrderCntByCategory() {
    const result = this.#orders.reduce((orderCntByCategory, order) => {
      const { category, amount } = order.info;

      if (!orderCntByCategory[category]) orderCntByCategory[category] = amount;
      orderCntByCategory[category] += amount;

      return orderCntByCategory;
    }, {});
    return result;
  }
}

export default EventPlanner;
