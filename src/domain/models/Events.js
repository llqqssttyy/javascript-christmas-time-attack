// 이벤트 정보를 저장하는 객체들

import { DESSERTS, MAIN_COURSES } from '../../statics/menus.js';

const CHRISTMAS_D_DAY = {
  getEvent() {
    return {
      name: '크리스마스 디데이 할인',
      getBenefit: this.getBenefit,
    };
  },

  getBenefit({ date }) {
    const baseAmount = 1000;
    const weightAmount = 100;

    return {
      amount: 1,
      price: baseAmount + weightAmount * (date - 1),
    };
  },

  isEventAvailable({ isChristmasPeriod }) {
    return isChristmasPeriod;
  },
};

const WEEKDAY = {
  getEvent() {
    return {
      name: '평일 할인',
      getBenefit: this.getBenefit,
    };
  },

  getBenefit({ orderCntByCategory }) {
    const discountAmount = 2_023;
    return {
      amount: orderCntByCategory[DESSERTS],
      price: discountAmount,
    };
  },

  isEventAvailable({ isWeekend, orderCategories }) {
    return !isWeekend && orderCategories.includes(DESSERTS);
  },
};

export const WEEKEND = {
  getEvent() {
    return {
      name: '주말 할인',
      getBenefit: this.getBenefit,
    };
  },

  getBenefit({ orderCntByCategory }) {
    const discountAmount = 2_023;
    return {
      amount: orderCntByCategory[MAIN_COURSES],
      price: discountAmount,
    };
  },

  isEventAvailable({ isWeekend, orderCategories }) {
    return isWeekend === true && orderCategories.includes(MAIN_COURSES);
  },
};

export const SPECIAL = {
  getEvent() {
    return {
      name: '특별 할인',
      getBenefit: this.getBenefit,
    };
  },

  getBenefit() {
    const discountAmount = 1_000;
    return {
      amount: 1,
      price: discountAmount,
    };
  },

  isEventAvailable({ isSpecialDate }) {
    return isSpecialDate === true;
  },
};

export const GIFT = {
  getEvent() {
    return {
      name: '증정 이벤트',
      getBenefit: this.getBenefit,
    };
  },

  getBenefit() {
    return {
      menu: '샴페인',
      amount: 1,
      price: 25_000,
    };
  },

  isEventAvailable({ totalPrice }) {
    return totalPrice >= 120_000;
  },
};

const EVENTS = [CHRISTMAS_D_DAY, WEEKDAY, WEEKEND, SPECIAL, GIFT];
export default EVENTS;
