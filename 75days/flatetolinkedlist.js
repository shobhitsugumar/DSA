//morris

var flatten = function (root) {
  let cur = root;

  while (cur !== null) {
    if (cur.left !== null) {
      let prev = cur.left;
      while (prev.right !== null) {
        prev = prev.right;
      }

      prev.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }

    cur = cur.right;
  }
};

// dfs

var flatten = function (root) {
  let prev = null; // this keeps track of the previously processed node

  function dfs(node) {
    if (!node) return;

    // process right first, then left (reverse preorder)
    dfs(node.right);
    dfs(node.left);

    // rewire pointers
    node.right = prev;
    node.left = null;

    // move prev to current node
    prev = node;
  }

  dfs(root);
};

// bfs
var flatten = function (root) {
  if (!root) return;

  const stack = [root];
  let prev = null;

  while (stack.length > 0) {
    let curr = stack.pop();

    if (prev) {
      prev.left = null;
      prev.right = curr;
    }

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);

    prev = curr;
  }
};
