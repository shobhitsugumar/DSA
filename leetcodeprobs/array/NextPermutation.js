/*
problem :https://leetcode.com/problems/next-permutation/description/

Input: nums = [1,2,3]
Output: [1,3,2]

solution : we first find the index which is 


 */

function NextPermutation(arr) {
  let index = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  //if there is no next greater permutation we reverse and return the smallest one
  if (index === -1) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  }

  for (let i = arr.length - 1; i >= index; i--) {
    if (arr[i] > arr[index]) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      break;
    }
  }

  //now we reverse
  let start = index + 1;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(NextPermutation([5, 4, 3, 2, 1]));
