//problem :136. Single Number :https://leetcode.com/problems/single-number/description/
/*
solution : 1: we can use hashing 
           2: we can use XOR
*/

//solution : using hashing

function findNumberOnce(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let [key, value] of map.entries) {
    if (value === 1) {
      return key;
    }
  }
  //if no value then return o
  return 0;
}

//solution using Xor

function findNumberOnce(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xot = xor ^ arr[i];
  }
  return xor;
}
