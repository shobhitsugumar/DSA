/*
Sum of minimum and maximum elements of all subarrays of size k. :https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/

Input : arr[] = {2, 5, -1, 7, -3, -1, -2}  
        K = 4
Output : 18
Explanation : Subarrays of size 4 are : 
     {2, 5, -1, 7},   min + max = -1 + 7 = 6
     {5, -1, 7, -3},  min + max = -3 + 7 = 4      
     {-1, 7, -3, -1}, min + max = -3 + 7 = 4
     {7, -3, -1, -2}, min + max = -3 + 7 = 4   
     
solution : we use dequeu to stor the min and max value 
*/

function sumMaxMin(arr, k) {
  let right = 0;
  let mindeque = [];
  let maxdeque = [];
  let sum = 0;

  while (right < arr.length) {
    // Remove elements out of the current window from both deques
    if (maxdeque.length > 0 && maxdeque[0] <= right - k) {
      maxdeque.shift();
    }
    if (mindeque.length > 0 && mindeque[0] <= right - k) {
      mindeque.shift();
    }

    // Maintain the deque for the maximum elements

    while (
      maxdeque.length > 0 &&
      arr[maxdeque[maxdeque.length - 1]] <= arr[right]
    ) {
      maxdeque.pop();
    }
    maxdeque.push(right);

    // Maintain the deque for the minimum elements

    while (
      mindeque.length > 0 &&
      arr[mindeque[mindeque.length - 1]] >= arr[right]
    ) {
      mindeque.pop();
    }

    mindeque.push(right);

    // Start adding results when the first window is complete
    if (right >= k - 1) {
      sum += arr[maxdeque[0]] + arr[mindeque[0]];
    }

    right++;
  }
  return sum;
}

const res = sumMaxMin([2, 5, -1, 7, -3, -1, -2], 4);
console.log(res);
