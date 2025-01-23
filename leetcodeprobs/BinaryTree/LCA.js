//problem :236. Lowest Common Ancestor of a Binary Tree
/**
 *solution : is to go recursion
 */

var lowestCommonAncestor = function (root, p, q) {
  function backtracking(root) {
    //base case
    if (root === null || root === q || root === p) {
      return root;
    }

    let left = backtracking(root.left);
    let right = backtracking(root.right);

    if (left === null) {
      return right;
    } else if (right === null) {
      return left;
    } else {
      return root;
    }
  }
  let res = backtracking(root);
  return res;
};
