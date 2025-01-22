/**
 * 
 Children Sum in a Binary Tree - https://www.geeksforgeeks.org/problems/children-sum-parent/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=hildren-sum-parent

 */

///solution
function childsum(root) {
  if (!root || (!root.left && !root.right)) {
    return 1;
  }

  let leftvalue = root.left ? root.left.value : 0;
  let rightvalue = root.right ? root.right.value : 0;

  if (root.value !== leftvalue + rightvalue) {
    return 0;
  }

  let leftnode = childsum(root.left);
  let rightnode = childsum(root.right);

  return leftnode & rightnode ? 1 : 0;
}

childsum(root);
