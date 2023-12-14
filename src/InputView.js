import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from './statics/messages.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUTS.date);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUTS.order);
    return input;
  },
};

export default InputView;
