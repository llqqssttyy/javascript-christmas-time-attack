import {
  isEmptyString,
  isNaN,
  isValidAmount,
  isValidDate,
  isValidMenu,
  isValidOrderForm,
} from './validators.js';

import throwError from '../../utils/throwError.js';
import { ERRORS } from '../../statics/messages.js';

const Validate = {
  date(input) {
    if (isEmptyString(input)) throwError(ERRORS.invalidDate);

    if (isNaN(input)) throwError(ERRORS.invalidDate);

    if (!isValidDate(input)) throwError(ERRORS.invalidDate);
  },

  order(input) {
    if (isEmptyString(input)) throwError(ERRORS.invalidOrder);

    if (!isValidOrderForm(input)) throwError(ERRORS.invalidOrder);
  },

  menu(input) {
    if (!isValidMenu(input)) throwError(ERRORS.invalidOrder);
  },

  amount(input) {
    if (!isValidAmount(input)) throwError(ERRORS.invalidOrder);
  },
};

export default Validate;
