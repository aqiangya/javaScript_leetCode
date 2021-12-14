/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 一种使用indexOf解决。或者说不使用循环haystack然后去匹配第一个字母
 * 然后然后把剩下的截取对比
 */
 var strStr = function(haystack, needle) {
  if(needle === '')return 0;
  return haystack.indexOf(needle);
};