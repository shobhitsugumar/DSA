/*
   104. Maximum Depth of Binary Tree :https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

*/

//solution

var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [];

  let length = 0;

  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentroot = queue.shift();

      if (currentroot.left) {
        queue.push(currentroot.left);
      }

      if (currentroot.right) {
        queue.push(currentroot.right);
      }
    }

    length += 1;
  }
  return length;
};
