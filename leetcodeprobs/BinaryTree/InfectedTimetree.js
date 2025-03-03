//problem :2385. Amount of Time for Binary Tree to Be Infected https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/
/**
 * Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

 */
var amountOfTime = function (root, start) {
  //we neeed to know the parent node
  let map = new Map();
  let startnode = null;

  function dfs(node, parent) {
    if (!node) return null;

    if (parent) {
      map.set(node, parent);
    }
    if (node.val === start) {
      startnode = node;
    }

    dfs(node.left, node);
    dfs(node.right, node);
  }
  dfs(root, null);

  //now we know the node and its parent node
  //we do bfs
  let queue = [];
  let visitednode = new Set(); // we use set instead of array because the look up time is O(1) in set whereas in array its O(n)

  queue.push(startnode);
  visitednode.add(startnode);
  let min = 0;

  while (queue.length > 0) {
    let size = queue.length;
    let spread = false;

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      let nearinfectednodes = [
        currentnode.left,
        currentnode.right,
        map.get(currentnode),
      ];

      for (let node of nearinfectednodes) {
        if (node && !visitednode.has(node)) {
          queue.push(node);
          visitednode.add(node);
          spread = true;
        }
      }
    }
    if (spread) min++;
  }
  return min;
};
