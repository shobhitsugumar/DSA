//First negative integer in every window of size k https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/
/*
Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
Output : -8 0 -6 -6
First negative integer for each window of size k
{-8, 2} = -8
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6
{-6, 10} = -6


SOLUTION :Using deque to store the negative indexes and and array to store the result 
*/

function FirstNegative(arr, k) {
  let right = 0;
  let deque = [];
  let result = [];

  while (right < arr.length) {
    if (arr[right] < 0) {
      deque.push(right);
    }
    //remove the index from the deque that are out of the window
    if (deque.length > 0 && deque[0] <= right - k) {
      deque.shift();
    }

    // Once we've processed the first k elements, start adding results
    if (right >= k - 1) {
      if (deque.length > 0) {
        result.push(arr[deque[0]]);
      } else {
        result.push(0);
      }
    }
    right++;
  }
  return result;
}
const res = FirstNegative([-8, 2, 3, -6, 10], 2);
console.log(res);
