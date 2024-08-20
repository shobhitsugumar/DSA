//problem : https://leetcode.com/problems/two-sum/submissions/1339085093/

/*Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]*/

/*
solution : solution : take a hashmap then sub the number by target and check if it is there in the array if not add that in the object
                             Time Complexity : O(n)
                             Space Complexity : O(n) 
           
Time Complexity : O(n)
Space Complexity : O(n)
 */

function twosum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [i, map.get(target - arr[i])];
    } else {
      map.set(arr[i], i);
    }
  }
}
const res = twosum([3, 2, 4], 6);
console.log(res);
