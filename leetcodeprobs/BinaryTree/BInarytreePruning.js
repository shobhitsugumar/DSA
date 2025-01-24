/**
 * 814. Binary Tree Pruning :https://leetcode.com/problems/binary-tree-pruning/description/
 */

//solution

var pruneTree = function (root) {
  function backtracking(root) {
    if (!root) return null;

    let left = backtracking(root.left);
    let right = backtracking(root.right);

    if (root.val === 0 && left === null && right === null) {
      return null;
    } else {
      root.left = left;
      root.right = right;
    }
    return root;
  }
  return backtracking(root);
};
