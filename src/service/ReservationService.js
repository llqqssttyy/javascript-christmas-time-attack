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
  }

  async #getDate() {
    const date = await this.#inputView.readDate();
    this.#eventPlanner.date = date;
  }
}

export default ReservationService;
