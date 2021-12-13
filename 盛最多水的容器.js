/**
 * 暴力解法，超时
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let result = [];
  for (let i = 0; i < height.length - 1; i++) {
    let arr = [];
    for (let j = i + 1; j < height.length; j++) {
      const elei = height[i];
      const elej = height[j];
      arr.push((elei > elej ? elej : elei) * (j - i))
    }
    result.push(Math.max(...arr));
  }
  return Math.max(...result);
};

/**
 * 双指针解法
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, maxVaule = 0, l= height.length - 1;
  while (i < l) {
    maxVaule = Math.max(maxVaule , Math.min(height[i],height[l]) * (l-i));
    if(height[i] > height[l]){
      l--
    }else{
      i++
    }
  }
  return maxVaule
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);