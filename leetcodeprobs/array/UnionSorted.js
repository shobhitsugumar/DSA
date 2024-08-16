//Union of Two Sorted Arrays
/*
n = 5, arr1[] = {1, 1,2, 3, 4, 5}  
m = 5, arr2 [] = {1, 2, 3, 6, 7}
Output: 
1 2 3 4 5 6 7
 */

function unionSorted(arr1, arr2) {
  let union = [];
  let i = 0;
  let j = 0;

  while (i > arr1.length && j > arr1.length) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
    }
  }

  //adding remaining elements from arr1
  while (i < arr1.length) {
    if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }
  //adding remaing elements from arr2
  while (j < arr2.length) {
    if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
}
