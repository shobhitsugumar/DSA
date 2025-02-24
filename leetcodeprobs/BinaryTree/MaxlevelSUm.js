/**
 * problem :https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/
 *
 * solution : we use dfs method
 *
 */
//solution in js
var maxLevelSum = function (root) {
  let queue = [];

  let level = 0;

  let max = -Infinity;
  let ans = 0;

  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;
    level = level + 1;

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      sum = sum + currentnode.val;

      if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }

    if (sum > max) {
      ans = level;
    }
    max = Math.max(sum, max);
  }
  return ans;
};
////////////////////////////////////////////////////////////////////////////////////

//solutin in java
