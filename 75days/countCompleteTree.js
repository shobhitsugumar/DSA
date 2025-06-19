/* 222. Count Complete Tree Nodes
Input: root = [1,2,3,4,5,6]
Output: 6
*/
//solution

const countproblem = function (root) {
  if (!root) return 0;

  let count = 0;

  function dfs(root) {
    if (!root) {
      return;
    }
    count++;
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
};
