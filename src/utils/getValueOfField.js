/**
 * 점 표기법으로 오브젝트의 값에 접근
 * @param {object} obj 검사할 오브젝트
 * @param {string} field 접근할 키
 * @returns
 */
const getValueOfField = (obj, field) => {
  if (!field) {
    return null;
  }

  const keys = field.split('.');

  return keys.reduce((curObj, curKey) => (curObj ? curObj[curKey] : null), obj);
};

export default getValueOfField;
