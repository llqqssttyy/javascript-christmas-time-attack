import { isEmptyString, isNaN, isValidDate } from './validators.js';

import throwError from '../../utils/throwError.js';
import { ERRORS } from '../../statics/messages.js';

const Validate = {
  date(input) {
    if (isEmptyString(input)) throwError(ERRORS.invalidDate);

    if (isNaN(input)) throwError(ERRORS.invalidDate);

    if (!isValidDate(input)) throwError(ERRORS.invalidDate);
  },

  order(input) {},
};

export default Validate;
