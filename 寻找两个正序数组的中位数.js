/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const List = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  if (List.length == 0) return 0;
  if (List.length % 2 == 0) {
    //[1,2,3,4]
    return (List[List.length / 2 - 1] + List[List.length / 2]) / 2;
  } else {
    return List[Math.ceil(List.length / 2) - 1];
  }
};
// [3]
// [-2,-1]
console.log(findMedianSortedArrays([3], [-2, -1]));
