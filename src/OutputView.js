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
    Console.print(OUTPUTS.order);
    Console.print(OUTPUTS.printOrder(orders));
  },

  printTotalPrice(price) {
    Console.print(OUTPUTS.totalPrice);
    Console.print(OUTPUTS.printTotalPrice(price));
  },

  printEventResult({ benefits, gift, totalBenefit, afterDiscount, badge }) {
    Console.print(OUTPUTS.gift);
    Console.print(OUTPUTS.printGift(gift));
    Console.print(OUTPUTS.benefit);
    Console.print(OUTPUTS.printBenefits(benefits));
    Console.print(OUTPUTS.totalBenefit);
    Console.print(OUTPUTS.printTotalBenefit(totalBenefit));
    Console.print(OUTPUTS.afterDiscount);
    Console.print(OUTPUTS.printAfterDiscount(afterDiscount));
    Console.print(OUTPUTS.badge);
    Console.print(OUTPUTS.printBadge(badge));
  },
};

export default OutputView;
