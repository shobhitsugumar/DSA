//problem :https://leetcode.com/problems/permutations/description/

/**
 Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

solution : is to use the backtracking method 

 */

var permute = function (nums) {
  let result = [];

  const backtracking = (result, currentarr, nums) => {
    //base case
    if (currentarr.length === nums.length) {
      result.push([...currentarr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (currentarr.includes(nums[i])) {
        continue;
      }
      currentarr.push(nums[i]);

      backtracking(result, currentarr, nums);
      currentarr.pop();
    }
  };
  backtracking(result, [], nums);
  return result;
};
