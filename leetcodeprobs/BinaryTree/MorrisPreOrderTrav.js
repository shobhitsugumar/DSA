///morris preorder Traversal
/**
 * solution : we solve this problem using thread connection
 */

var inorderTraversal = function (root) {
  let current = root;
  let inorder = [];

  while (current !== null) {
    if (current.left === null) {
      inorder.push(current.val);
      current = current.right;
    } else {
      let prev = current.left;
      while (prev.right && prev.right !== current) {
        prev = prev.right;
      }
      if (prev.right === null) {
        prev.right = current;
        inorder.push(current.val);
        current = current.left;
      } else {
        prev.right = null;
        current = current.right;
      }
    }
  }
  return inorder;
};
