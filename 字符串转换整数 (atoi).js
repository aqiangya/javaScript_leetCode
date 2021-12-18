/**
 * @param {string} s
 * @return {number}
 * 这道题意义不大，就不去写具体的解了，大概思路有就行了
 */
 var myAtoi = function(s) {
  const arr = s.trim().split('');
  let num = '';
  if(/[a-zA-Z]/.test(arr[0])){
      return 0;            
  }
  for (let i = 0; i < arr.length; i++) {
      if(/[0-9]/.test(arr[i])){
          num = num + arr[i];
          let j = i;
          if(arr[j - 1] === '-'||arr[j - 1] === '+'){
              num = arr[j - 1] + num;
              if(arr[j - 2] === '-'||arr[j - 2] === '+'){
                return 0;  
              }
              j--;
          }
        }
        if(arr[i] === '.'){
          break;
        }
  }
  Math.pow(-2, 31) > Number(num) ? num = Math.pow(-2, 31) : ''
  Math.pow(2, 31) < Number(num) ? num = Math.pow(2, 31) - 1 : ''
  return num;
};

// console.log(myAtoi("21474836460"));