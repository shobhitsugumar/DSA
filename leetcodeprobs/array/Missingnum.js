/*268. Missing Number : https://leetcode.com/problems/missing-number/description/

Input: nums = [3,0,1]
Output: 2

solution :  1 :  we can use sum we sum all the number and - the sum of the array and we get the number 
            2 : another way is to use XOR
 */

//solution : using sum

function missingsum(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let s2 = 0;
  for (let i = 0; i < arr.length; i++) {
    s2 += arr[i];
  }
  return sum - s2;
}

//solution using Xor
//if the array is starting from 1 and not from 0 [1,2,4,5]
function missingsum(arr) {
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i + 1); //if the array starts from 0 then we normally do xor1 ^ i
  }
  xor1 ^ arr.length;
  return xor1 ^ xor2;
}
