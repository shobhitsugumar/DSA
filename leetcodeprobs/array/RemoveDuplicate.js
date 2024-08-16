//26. Remove Duplicates from Sorted Array :https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

//solution :using two pointer in place

function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  arr.length = i + 1;
  return arr;
}

const res = removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3]);
console.log(res);
