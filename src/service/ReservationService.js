import { handleException } from '../utils/handleException.js';

class ReservationService {
  #inputView;

  #outputView;

  #eventPlanner;

  constructor(inputView, outputView, eventPlanner) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#eventPlanner = eventPlanner;

    this.#outputView.printStart();
  }

  async start() {
    await handleException(() => this.#getDate());
    await handleException(() => this.#getOrder());

    this.#outputView.printEventGuide();
    this.#printOrderItems();
    this.#printTotalPrice();
  }

  async #getDate() {
    const date = await this.#inputView.readDate();
    this.#eventPlanner.date = date;
  }

  async #getOrder() {
    const orders = await this.#inputView.readOrder();
    this.#eventPlanner.orders = orders;
  }

  #printOrderItems() {
    const { orders } = this.#eventPlanner;
    this.#outputView.printOrders(orders);
  }

  #printTotalPrice() {
    const { totalPrice } = this.#eventPlanner;
    this.#outputView.printTotalPrice(totalPrice);
  }
}

export default ReservationService;
