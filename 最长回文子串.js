/**
 * @param {string} s
 * @return {string}
 */
//回文的意思是正着念和倒着念一样，如：上海自来水来自海上
//aca acca 两种情况的判断 aacabccb
var longestPalindrome = function (s) {
  // 返回每个最长的子串
  const longOne = (k) => {
    let j = 1;
    while (list[k - j] == list[k + j] && list[k + j] != undefined) {
      j++;
    }
    let l = 1;
    while (list[k - l + 1] == list[k + l] && list[k + l] != undefined) {
      l++;
    }

    if (j == 1 && l == 1) return "";
    if (j >= l) return s.substring(k - j + 1, k + j);
    return s.substring(k - l + 2, k + l);
  };

  const list = s.split("");
  if (list.length == 1) return s;
  let i = 0;
  let longString = list[0];
  while (i < list.length) {
    const result = longOne(i);
    console.log(result);
    if (longString.length < result.length) {
      longString = result;
    }
    i++;
  }

  return longString;
};

console.log(longestPalindrome("aaa"));
// "aca"
