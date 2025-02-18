/**
 * problem : 623. Add One Row to Tree
 * solution : we do dfs we pass the intialdepth and we check if the intialdepth+1 === depth then we create a new node and we put the newnode.left as
 *            root.left and root.left as newnode as applies for right
 *
 */

//solution

var addOneRow = function (root, val, depth) {
  function dfs(root, intialdepth, depth) {
    if (!root) return;

    if (depth - 1 === 0) {
      let newnode = new TreeNode(val);
      newnode.left = root;
      return newnode;
    }

    if (intialdepth + 1 === depth) {
      let firstnewnode = new TreeNode(val);
      firstnewnode.left = root.left;
      root.left = firstnewnode;

      let secondnode = new TreeNode(val);
      secondnode.right = root.right;
      root.right = secondnode;

      return root;
    }
    dfs(root.left, intialdepth + 1, depth);
    dfs(root.right, intialdepth + 1, depth);
    return root;
  }
  return dfs(root, 1, depth);
};
