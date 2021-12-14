/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let i = 0;
  while (i < nums.length) {
    if(target === nums[i]){
      let j = i;
      while (target === nums[j]) {
        j++;
      }
      return [i,j - 1];
    }
    i++
  }
  return [-1,-1];
};

console.log(searchRange([1],1));