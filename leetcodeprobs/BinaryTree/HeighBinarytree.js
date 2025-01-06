/*problem : to find the max height of the binary array=>  104. Maximum Depth of Binary Tree


https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
Input: root = [3,9,20,null,null,15,7]
Output: 3

solution : is to use the level order traversal (BFS) */

function HeightBinaryTree(root) {
  let length = 0;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }
    length += 1;
  }
  return length;
}
