//993. Cousins in Binary Tree

//solution is to use bfs traversal

var isCousins = function (root, x, y) {
  if (!root) return false;
  let queue = [];

  queue.push({ node: root, depth: 0, parent: null });
  let xinfo = null;
  let yinfo = null;

  while (queue.length > 0) {
    let { node, depth, parent } = queue.shift();

    if (node.val === x) {
      xinfo = { depth, parent };
    }
    if (node.val === y) {
      yinfo = { depth, parent };
    }

    if (xinfo && yinfo) break;

    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1, parent: node });
    }

    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1, parent: node });
    }
  }

  if (xinfo && yinfo) {
    return xinfo.depth === yinfo.depth && xinfo.parent !== yinfo.parent;
  }

  return false;
};
