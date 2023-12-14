import {
  VALID_AMOUNT_MIN,
  VALID_DATE_MAX,
  VALID_DATE_MIN,
} from '../../statics/constants.js';
import { MENUS } from '../../statics/menus.js';

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

export const isValidOrderForm = (str) => {
  const formRegex = new RegExp(/^([ㄱ-ㅎㅏ-ㅣ가-힣]+-\d+,?)+$/);
  return formRegex.test(str);
};

export const isValidMenu = (str) => {
  return MENUS.includes(str);
};

export const isValidAmount = (str) => {
  const amount = Number(str);
  return amount >= VALID_AMOUNT_MIN;
};
