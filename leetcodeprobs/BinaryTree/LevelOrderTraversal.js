/**
 *problem :102. Binary Tree Level Order Traversal
 https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

//solution :

const LevelOrderTraversal = (root) => {
  if (!root) return []; //edge case

  let queue = [];
  let result = [];

  queue.push(root);

  while (queue.length > 0) {
    let arr = [];

    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentnode = queue.shift();
      arr.push(currentnode.val);

      if (currentnode.left) {
        queue.push(currentnode.left);
      }

      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }
    result.push(arr);
  }
  return result;
};
