//problem : 538 convert binary search tree into greater tree
//solution is to use dfs we go right first and then we go left we take a sum as variable we do the sum and put the value in the root.val

var convertBST = function (root) {
  let sum = 0;

  if (!root) return null;

  function dfs(root) {
    if (!root) return;

    dfs(root.right);
    sum = sum + root.val;
    root.val = sum;
    dfs(root.left);
    return root;
  }
  return dfs(root);
};
