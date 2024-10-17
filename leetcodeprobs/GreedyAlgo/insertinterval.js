/*
57. Insert Interval


Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

solution : we divide it into three the left the mergermid and the right 
           first whlie loop for :  Add intervals that come before the new interval (no overlap)
           second while loop :    Merge overlapping intervals with the new interval.
           thrid while loop :     Add the remaining intervals after the merged interval.

*/

function insertinterval(arr, insertval) {
  let res = [];

  let i = 0;

  // // Step 1: Add all intervals that come before the new interval
  while (i < arr.length && arr[i][1] < insertval[0]) {
    res.push(arr[i]);
    i++;
  }

  //Step 2: Merge overlapping intervals with the new interval

  while (i < arr.length && arr[i][0] <= insertval[1]) {
    insertval[0] = Math.min(arr[i][0], insertval[0]);
    insertval[1] = Math.max(arr[i][1], insertval[1]);
    i++;
  }
  res.push(insertval);

  // Step 3: Add all remaining intervals
  while (i < arr.length) {
    res.push(arr[i]);
    i++;
  }
  return res;
}
