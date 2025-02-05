/**
 *111. Minimum Depth of Binary Tree : https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

 solution : 1) BRUTE FORCE : we do recursive 
            2) optimal approach : we do BFS search .we stop when both the left and right is null and return the depth 

 */
/////////////////////////////////////////////////////////////////////////////////

//BRUTE FORCE
var minDepth = function (root) {
  function backtracking(root) {
    if (!root) return 0;

    let left = backtracking(root.left);
    let right = backtracking(root.right);

    //if there is no left or right
    if (!root.left || !root.right) {
      return 1 + (left + right);
    }

    return 1 + Math.min(left, right);
  }
  return backtracking(root);
};

////////////////////////////////////////////////////////////////////////////
//OPTIMAL APPROACH

var minDepth = function (root) {
  if (!root) return 0;
  let queue = [];

  queue.push([root, 1]);

  while (queue.length > 0) {
    let [node, depth] = queue.shift();

    //if there is no left and right thats it we reach the shortes path so we return the depth
    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
};
