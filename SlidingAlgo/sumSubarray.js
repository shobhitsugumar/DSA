//problems Sum of all subarrays of size K : https://www.geeksforgeeks.org/sum-of-all-subarrays-of-size-k/
/*
Input: arr[] = {1, 2, 3, 4, 5, 6}, K = 3 
Output: 6 9 12 15 
Explanation: 
All subarrays of size k and their sum: 
Subarray 1: {1, 2, 3} = 1 + 2 + 3 = 6 
Subarray 2: {2, 3, 4} = 2 + 3 + 4 = 9 
Subarray 3: {3, 4, 5} = 3 + 4 + 5 = 12 
Subarray 4: {4, 5, 6} = 4 + 5 + 6 = 15


*/

function SumSubarray(arr, k) {
  let right = 0;
  let sum = 0;
  let result = [];
  while (right < arr.length) {
    sum += arr[right];
    if (right >= k - 1) {
      result.push(sum);
      sum -= arr[right - k + 1];
    }
    right++;
  }
  return result;
}

const res = SumSubarray([1, 2, 3, 4, 5, 6], 3);
console.log(res);
