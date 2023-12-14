import InputView from './InputView.js';
import OutputView from './OutputView.js';
import EventPlanner from './domain/EventPlanner.js';

import ReservationService from './service/ReservationService.js';

class App {
  async run() {
    const service = new ReservationService(
      InputView,
      OutputView,
      new EventPlanner(),
    );

    await service.start();
  }
}

export default App;
