/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res =[];
    const deep = (arr,temp) =>{
     let arrLength = arr.length
     if( arrLength === 0) res.push(temp);
     for (let i = 0; i < arrLength; i++) {
       let newArr = arr.slice(0,i).concat(arr.slice(i+1));
       deep(newArr,temp.concat(arr[i]))
     }
    }
    deep(nums, []);
    return res;
 };
console.log(permute([1,2,3]));