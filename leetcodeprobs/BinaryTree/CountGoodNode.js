/**
 *1448. Count Good Nodes in Binary Tree

  Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

 */
//solution

var goodNodes = function (root) {
  let count = 0;

  function dfs(node, max) {
    if (!node) return;

    if (node.val >= max) {
      max = node.val;
      count++;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  }
  dfs(root, root.val);
  return count;
};
