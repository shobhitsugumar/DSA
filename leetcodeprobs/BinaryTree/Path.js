/*
112. Path Sum = https://leetcode.com/problems/path-sum/description/?envType=study-plan-v2&envId=top-interview-150




*/

var hasPathSum = function (root, targetSum) {
  let result = false;

  const backtrack = (node, currentsum) => {
    if (!node) return;

    currentsum += node.val;

    if (!node.left && !node.right) {
      if (currentsum === targetSum) {
        result = true;
      }
      return;
    }
    backtrack(node.left, currentsum);
    backtrack(node.right, currentsum);
  };
  backtrack(root, 0);
  return result;
};
