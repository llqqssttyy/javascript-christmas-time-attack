import { handleException } from '../utils/handleException.js';

class ReservationService {
  #inputView;

  #outputView;

  #eventPlanner;

  constructor(inputView, outputView, eventPlanner) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#eventPlanner = eventPlanner;
  }

  async start() {
    this.#outputView.printStart();

    await handleException(() => this.#getDate());
    await handleException(() => this.#getOrder());
  }

  async #getDate() {
    const date = await this.#inputView.readDate();
    this.#eventPlanner.date = date;
  }

  async #getOrder() {
    const order = await this.#inputView.readOrder();
    this.#eventPlanner.order = order;
  }
}

export default ReservationService;
