/**
 * 637. Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */

var averageOfLevels = function (root) {
  let queue = [];
  let arr = [];

  queue.push(root);

  while (queue.length) {
    let ans = 0;
    let size = queue.length;
    for (let i = 1; i <= size; i++) {
      let current = queue.shift();
      ans += current.val;

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    arr.push(ans / size);
  }
  return arr;
};
