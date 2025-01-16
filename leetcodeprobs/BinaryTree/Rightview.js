//problem :https://leetcode.com/problems/binary-tree-right-side-view/submissions/1510255292/\
/**
 * 199. Binary Tree Right Side View
 *
 * solution : solution 1 => is to use of the horizontal line
 *            time complexity : O(n)
 *            space  complexity : O(n)
 *
 *            solution 2 => is to use of recursion. the  key is to have one level we check if the map length === level then we add the current element to the map
 *            time complexity : O(n)
 *            space complexity : O(n)
 *
 *
 *
 *
 */
var rightSideView = function (root) {
  if (!root) return [];
  let queue = [];
  let map = new Map();

  queue.push([root, 0]);

  while (queue.length > 0) {
    let [currentnode, y] = queue.shift();

    map.set(y, currentnode.val);

    if (currentnode.left) {
      queue.push([currentnode.left, y + 1]);
    }

    if (currentnode.right) {
      queue.push([currentnode.right, y + 1]);
    }
  }

  let ans = [];

  for (let [key, value] of sortedval) {
    ans.push(map.get(key));
  }
  return ans;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//solution

var rightSideView = function (root) {
  let result = [];

  function rightside(root, level) {
    if (root === null) {
      return;
    }

    if (level === result.length) {
      result.push(root.val);
    }

    rightside(root.right, level + 1);
    rightside(root.left, level + 1);
  }
  rightside(root, 0);

  return result;
};
