//problem : https://leetcode.com/problems/move-zeroes/description/
//solution using two pointer ,first we find the zeroth element

//swapping function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function Movezero(arr) {
  //finding the zeroth element
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  //now swapping the elements
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, j);
      j++;
    }
  }
  return arr;
}

const res = Movezero([0, 1, 0, 3, 12]);
console.log(res);
