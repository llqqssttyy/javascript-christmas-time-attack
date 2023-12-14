import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from './statics/messages.js';

const OutputView = {
  printStart() {
    Console.print(OUTPUTS.start);
  },

  printMenu() {
    Console.print(OUTPUTS.order);
    // ...
  },
  // ...
};

export default OutputView;
