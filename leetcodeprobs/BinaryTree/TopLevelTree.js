//problem : https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1
/**
 Top View of Binary Tree
solution : is to use the level order traversal .this problem is similar to the vertical Traversal
 */

class Solution {
  // Function to return a list of nodes visible from the top view
  // from left to right in Binary Tree.
  topView(root) {
    // code here

    if (!root) return null;
    let queue = [];
    let map = new Map();

    queue.push([root, 0]);

    while (queue.length > 0) {
      let [currentnode, x] = queue.shift();

      if (!map.has(x)) {
        map.set(x, currentnode.data);
      }

      if (currentnode.left) {
        queue.push([currentnode.left, [x - 1]]);
      }
      if (currentnode.right) {
        queue.push([currentnode.right, [x + 1]]);
      }
    }

    //sorting and adding them into ans array
    let ans = [];
    let outerkeys = [...map.keys()].sort((a, b) => a - b);
    for (let i of outerkeys) {
      ans.push(map.get(i));
    }
    return ans;
  }
}
