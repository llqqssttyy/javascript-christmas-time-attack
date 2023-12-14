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

    this.#linkEventPlanner();
  }

  async #getDate() {
    const date = await this.#inputView.readDate();
    this.#eventPlanner.date = date;
  }

  async #getOrder() {
    const orders = await this.#inputView.readOrder();
    this.#eventPlanner.orders = orders;
  }

  #linkEventPlanner() {
    this.#outputView.printEventGuide();
    this.#printOrderItems();
    this.#printTotalPrice();

    this.#eventPlanner.findAvailableEvents();
    this.#printEventResult();
  }

  #printOrderItems() {
    const { orders } = this.#eventPlanner;
    this.#outputView.printOrders(orders);
  }

  #printTotalPrice() {
    const { totalPrice } = this.#eventPlanner;
    this.#outputView.printTotalPrice(totalPrice);
  }

  #printEventResult() {
    const { benefits, gift, totalBenefit, afterDiscount, badge } =
      this.#eventPlanner;
    this.#outputView.printEventResult({
      benefits,
      gift,
      totalBenefit,
      afterDiscount,
      badge,
    });
    // console.log(benefits, gift, totalBenefit, afterDiscount, badge);
  }
}

export default ReservationService;
