/*problem : https://leetcode.com/problems/sort-colors/description/

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

solution : brute force : is to use any sorting algo like merge or quicksort which take time of O(nlogn)
           better solution : is to keep count of 0s 1s and 2s 
           optimal solution : is to use Dutch National flag 

*/

//solution : better solution  : O(2n)

function sortnum(arr) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  let index = 0;
  //putting the 0 first
  for (let i = 0; i < count0; i++) {
    arr[index++] = 0;
  }

  //putting 1 in the array
  for (let i = 0; i < count1; i++) {
    arr[index++] = 1;
  }

  //putting 2 in the array
  for (let i = 0; i < count2; i++) {
    arr[index++] = 2;
  }
}

//optimal solution is using Dutch National flag

function sortnum(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[i] === 0) {
      //swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[i] === 1) {
      mid++;
    } else {
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
