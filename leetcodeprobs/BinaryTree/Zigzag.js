/**
 problems :https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

 103. Binary Tree Zigzag Level Order Traversal

 solution : is to use level order traversal

 */

function zigzag(root) {
  let result = [];
  let queue = [];
  queue.push(root);

  //a flag to check if its left to right or right to left

  lefttoright = true;

  while (queue.length > 0) {
    let size = queue.length;
    let ans = Array(size);

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      let index = 0;

      if (lefttoright) {
        index = i;
      } else {
        index = size - 1 - i;
      }

      ans[index] = currentnode.val;

      if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }
  }
}
