/**
 * problem :863. All Nodes Distance K in Binary Tree
 *
 *
 * solution : is to use both the BFS as well as the DFS
 *            the apporach is : we need to move up aswell as down .in normal tree we cannot do it we go only down ways
 *                              so that we need to make it as undirectional graph so what we do is
 *                                      1) we take it a map to store the node and its parent node
 *                              Then we do bfs because we need to find the k values from the targeted node
 *                              same like we usualy take a queue to do the level order traversal
 *                              and we need a visited queue because we need to track of the visited nodes so that we dont end up in loop
 *
 *                              The intution is from the node we move all the ways the left ,right and the top direction we store them in the array
 *                              then we run over that array and see if the value present in the visited array
 *                              if no we push it into the queue and into the visited array
 *                              then we increase the level ++ if level is equal to the k then we break the loop
 *
 *                              the last value that lies in the queue is the answer
 */

function kbinary(root, target, k) {
  //first we need to make the binary tree as undirectional graph
  let map = new Map();

  //we put the value into the map  using dfs method

  function dfs(node, parent) {
    if (!node) return null;

    if (parent) map.set(node, parent);

    dfs(node.left, parent);
    dfs(node.right, parent);
  }
  dfs(root, null);

  //now all the value withs its parents are marked

  //now we take a queue and visited array
  let queue = [];
  let visitednode = new Set();

  let level = 0;
  let result = [];

  queue.push(target);
  visitednode.add(target);

  while (queue.length > 0) {
    let size = queue.length;
    //if the level is equal to the k then we break the function

    if (level === k) {
      break;
    }

    for (let i = 0; i < size; i++) {
      let currentnode = queue.shift();

      //we get the near by target nodes the left of the right and the parent node
      let nearnodes = [
        currentnode.left,
        currentnode.right,
        map.get(currentnode),
      ];

      for (let nearnode of nearnodes) {
        //if there is nearnode and the visited node does not contains the already visited node in the set
        if (nearnode && !visitednode.has(nearnode)) {
          //we push them in to the queue and visited queue
          queue.push(nearnode);
          visitednode.push(nearnode);
        }
      }
    }
    level++;
  }
  while (queue.length > 0) {
    result.push(queue.shift().val);
  }
  return result;
}
