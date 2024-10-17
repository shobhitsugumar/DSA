//problem :435. Non-overlapping Intervals
/*
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

*/

function noninterval(arr) {
  let count = 0;
  arr.sort((a, b) => a[1] - b[1]);
  let previos = arr[0];
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < previos[1]) {
      console.log("i get here  ", i);
      console.log("previos", previos);
      count++;
    } else {
      previos = arr[i];
    }
  }
  return count;
}
