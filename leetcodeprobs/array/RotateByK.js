/*
problem : 189. Rotate Array by K : https://leetcode.com/problems/rotate-array/description/

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]


solution : we reverse the first d elements then we reverse the rest of the elements after that we reverse full 
*/

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
//left rotatation
function rotateleft(arr, k) {
  let n = arr.length;
  k = k % n;

  if (k === 0) {
    return arr;
  }

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

//right rotation
function rotateright(arr, k) {
  let n = arr.length;
  k = k % n;
  if (k === 0) {
    return arr;
  }
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
}

const res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);
