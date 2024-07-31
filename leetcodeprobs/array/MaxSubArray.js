//problem :"Find the maximum sum of sub-array of size k with the time complexity of O(N).
/*
Array = [1, 2, 6, 2, 4, 1], k = 3"

Sum of 1st sub-array = 1 + 2 + 6 = 9
Sum of 2nd sub-array = 2 + 6 + 2 = 10
Sum of 3rd sub-array = 6 + 2 + 4 = 12
Sum of 4th sub-array = 2 + 4 + 1 = 7
The maximum (biggest) number among 9, 10, 12, and 7 is "12" – or the 3rd sub-array. 


solution : 1: Using Sliding window algorithm but this takes time complexity of O(N * K)
           2: Using same Slinding window algorithm with O(N) 
*/

//solution 1  :timecomplexity O(n * K)
function Maxsubarray(arr, k) {
  let maxnum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxnum = Math.max(sum, maxnum);
  }
  return maxnum;
}

//////////////////////////////////////////

//solution 2:timecomplexity : O(n) fixed sliding window

function fixedslidingWindow(num, k) {
  //first find the sum of the first k values
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let maxsum = sum;
  for (let i = k; i < num.length; i++) {
    sum += arr[i] - arr[i - k];
    maxsum = Math.max(sum, maxsum);
  }
  return maxsum;
}
