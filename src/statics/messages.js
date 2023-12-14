const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  invalidDate: '유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
});

const INPUTS = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  order:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const OUTPUTS = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  eventGuide: '12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n',
  order: '<주문 메뉴>\n',
  totalPrice: '<할인 전 총주문 금액>\n',
  gift: '<증정 메뉴>\n',
  benefit: '<혜택 내역>\n',
  totalBenefit: '<총혜택 금액>\n',
  afterDiscount: '<할인 후 예상 결제 금액>\n',
  badge: '<12월 이벤트 배지>\n',

  nothing: '없음\n',
  star: '별\n',
  tree: '트리\n',
  santa: '산타\n',

  printOrder(orders) {
    return orders
      .map(({ menu, amount }) => {
        return `${menu} ${amount}개`;
      })
      .join('\n');
  },
});

export { ERRORS, INPUTS, OUTPUTS };
