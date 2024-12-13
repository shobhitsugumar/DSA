//problem : https://leetcode.com/problems/permutations-ii/description/

/**
 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]



solution : to use backtracking and to keep track of the same element we use a ,array to keep track of the element 
 */
var permuteUnique = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);

  nums.sort((a, b) => a - b);

  function backtrack(result, templist, nums, used) {
    if (templist.length === nums.length) {
      result.push([...templist]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      //to skip the duplicate
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      templist.push(nums[i]);
      used[i] = true;

      backtrack(result, templist, nums, used);
      templist.pop();
      used[i] = false;
    }
  }
  backtrack(result, [], nums, used);
  return result;
};
