import { VALID_DATE_MAX, VALID_DATE_MIN } from '../../statics/constants.js';

export const isEmptyString = (str) => {
  return str.trim() === '';
};

export const isNaN = (str) => {
  const date = Number(str);
  return Number.isNaN(date);
};

export const isValidDate = (str) => {
  const date = Number(str);
  return date >= VALID_DATE_MIN && date <= VALID_DATE_MAX;
};
