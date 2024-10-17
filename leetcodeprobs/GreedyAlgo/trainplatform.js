/**
 problem : Minimum Platforms
Input: arr[] = [0900, 0940, 0950, 1100, 1500, 1800], 
            dep[] = [0910, 1200, 1120, 1130, 1900, 2000]
Output: 3


solution : same we sort the array and  keep two pointer i and j we check if(arr[i]<= dep[j]) here i would be 1 and j = 0 
           
 */

function missingplat(arr, dep) {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let n = arr.length;
  let maxplatform = 1;
  let platformneeded = 1;
  let i = 1;
  let j = 0;
  while (i < n && j < n) {
    //if arr[i] is less then the prev train depature[ j ] then we need another platform
    if (arr[i] <= dep[j]) {
      platformneeded++;
      i++;
    } else {
      platformneeded--;
      j++;
    }
    maxplatform = Math.max(maxplatform, platformneeded);
  }
  return maxplatform;
}
