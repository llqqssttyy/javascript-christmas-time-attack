const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  invalidDate: '유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
});

const INPUTS = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
});

const OUTPUTS = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  order: '<주문 메뉴>\n',
});

export { ERRORS, INPUTS, OUTPUTS };
