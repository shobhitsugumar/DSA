/**
 * problem :863. All Nodes Distance K in Binary Tree
 *
 *
 * solution : is to use both the BFS as well as the DFS
 *            the apporach is : we need to move up aswell as down .in normal tree we cannot do it we go only down ways
 *                              so that we need to make it as undirectional graph so what we do is
 *                                      1) we take  a map to store the node and its parent node
 *                              Then we do bfs because we need to find the k values from the targeted node
 *                              same like we usualy take a queue to do the level order traversal
 *                              and we need a visited arr because we need to track of the visited nodes so that we dont end up in loop
 *
 *                              The intution is from the node we move all the ways the left ,right and the top direction we store them in the array
 *                              then we run over that array and see if the value present in the visited array
 *                              if no we push it into the queue and into the visited array
 *                              then we increase the level ++ if level is equal to the k then we break the loop
 *
 *                              the last value that lies in the queue is the answer
 */

var distanceK = function (root, target, k) {
  //let make the binary tree into graph using the dfs we store the parent in the map
  let map = new Map();

  function dfs(node, parent) {
    if (!node) return null;

    if (parent) map.set(node, parent);

    dfs(node.left, node);
    dfs(node.right, node);
  }
  dfs(root, null);

  //now we have the root and their parents

  //we do bfs to find the k th value
  //we take queue and visited arr to keep track of the visited nodes
  let queue = [];
  let visited = [];

  queue.push(target);
  visited.push(target);
  let level = 0;
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;

    if (level === k) break;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      let nearnodes = [node.left, node.right, map.get(node)];

      for (const nearnode of nearnodes) {
        if (nearnode && !visited.includes(nearnode)) {
          queue.push(nearnode);
          visited.push(nearnode);
        }
      }
    }

    level++;
  }

  while (queue.length > 0) {
    result.push(queue.shift().val);
  }
  return result;
};
