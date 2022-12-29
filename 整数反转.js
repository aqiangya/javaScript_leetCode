/**
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x;
  if (x < 0) str = Math.abs(str);
  const list = (str + "").split("");
  const strList = list.reverse().join("");
  if (
    number(strList) > Math.pow(2, 31) - 1 ||
    number(strList) < -Math.pow(2, 31)
  )
    return 0;
  return x < 0 ? Number("-" + strList) : Number(strList);
};
