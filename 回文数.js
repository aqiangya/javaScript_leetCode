/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);
  let j = Math.ceil(str.length / 2);
  if (
    str.substring(0, str.length % 2 == 0 ? j : j - 1) ==
    str.substring(j, str.length).split("").reverse().join("")
  )
    return true;
  return false;
};

console.log(isPalindrome(1221));
