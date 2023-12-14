import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from './statics/messages.js';

const OutputView = {
  printStart() {
    Console.print(OUTPUTS.start);
  },

  printEventGuide() {
    Console.print(OUTPUTS.eventGuide);
  },

  printOrders(orders) {
    const { order, printOrder } = OUTPUTS;

    Console.print(order);
    Console.print(printOrder(orders));
  },

  printTotalPrice(price) {
    const { totalPrice, printTotalPrice } = OUTPUTS;

    Console.print(totalPrice);
    Console.print(printTotalPrice(price));
  },
};

export default OutputView;
