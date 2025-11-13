//bfs method

var invertTree = function (root) {
  if (!root) return null;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    let temp = node.right;
    node.right = node.left;
    node.left = temp;

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
  return root;
};

//dfs method
var invertTree = function (root) {
  if (!root) return root;

  function backtrack(root) {
    if (!root) return root;

    let left = backtrack(root.left);
    let right = backtrack(root.right);

    root.left = right;
    root.right = left;

    return root;
  }

  backtrack(root);

  return root;
};
