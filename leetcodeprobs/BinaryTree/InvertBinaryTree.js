//226. Invert Binary Tree

/*https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
 */

//solution
var invertTree = function (root) {
  if (!root) return root;

  function backtracking(root) {
    if (!root) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    backtracking(root.left);
    backtracking(root.right);
  }
  backtracking(root);
  return root;
};
//