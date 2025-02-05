/**
 * problem :2331. Evaluate Boolean Binary Tree :https://leetcode.com/problems/evaluate-boolean-binary-tree/description/
 *
 *
 *
 */

//solution
var evaluateTree = function (root) {
  function backtracking(root) {
    if (!root) return;

    let left = backtracking(root.left);
    let right = backtracking(root.right);

    if (root.val === 3) {
      return left && right;
    } else if (root.val === 2) {
      return left || right;
    } else {
      if (root.val === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
  return backtracking(root);
};
