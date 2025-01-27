//965. Univalued Binary Tree
/**
 * https://leetcode.com/problems/univalued-binary-tree/description/
 */

//solution

//dfs method
var isUnivalTree = function (root) {
  if (!root) return true;

  function dfs(node, value) {
    if (!node) return true;
    if (node.val !== value) return false;

    // Check left and right subtrees
    return dfs(node.left, value) && dfs(node.right, value);
  }

  return dfs(root, root.val);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// bfs method

const binaryTreePaths = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [[root, ""]];

  while (stack.length > 0) {
    const [node, path] = stack.pop();

    if (node) {
      const newPath = path + node.val;

      if (!node.left && !node.right) {
        result.push(newPath); // Leaf node
      } else {
        stack.push([node.right, newPath + "->"]);
        stack.push([node.left, newPath + "->"]);
      }
    }
  }

  return result;
};
