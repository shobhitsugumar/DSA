//problem :513. Find Bottom Left Tree Value :  https://leetcode.com/problems/find-bottom-left-tree-value/description/
/*
     Given the root of a binary tree, return the leftmost value in the last row of the tree
 */

var findBottomLeftValue = function (root) {
  let queue = [];
  let no = null;

  queue.push(root);

  while (queue.length > 0) {
    let currentnode = queue.shift();

    no = currentnode.val;

    if (currentnode.right) {
      queue.push(currentnode.right);
    }
    if (currentnode.left) {
      queue.push(currentnode.left);
    }
  }
  return no;
};
