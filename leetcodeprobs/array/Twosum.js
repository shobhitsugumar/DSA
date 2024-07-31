//problem : https://leetcode.com/problems/two-sum/submissions/1339085093/

/*
solution : take a empty object then sub the numbet by target and check if it is there in the array if not add that in the object 


Time Complexity : O(n)
Space Complexity : O(n)
 */

function twoSum(nums, target) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (value in numMap) {
      return [numMap[value], i];
    }
    //if it is not present we store the value 2 and the its index
    numMap[nums[i]] = i;
  }
  return null;
}
