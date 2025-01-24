/**
 * convert the binary tree to linked list  :https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *                The "linked list" should be in the same order as a pre-order traversal of the binary tree.

 *
 * solution : there are tree solution for this one
 *
 *
 *          1) reverse pre-order traversal where, instead of simply visiting nodes, we flatten the tree into a linked list as we traverse it.
 *               first one is traverse and chain the link
 *            *  we go right traversal and then left .first we flat the right one and then we do the left .
 *            *  intialie we take prev as null then after that we point to the current node
 *               Time complexity : O(n)
 *               Space comoplexity : O(n)
 *
 *          2) solution two is to use stack
 *             Time complexity : O(n)
 *             Space Complexity : O(n)
 *
 *          3) solution is to use Morris traversal using thread (Optimized one )
 *             Time Complexity : O(n) near to n
 *             Space complexity : O(1)
 *
 */

///solution 1 :
var flatten = function (root) {
  if (!root) return [];
  let prev = null;

  function backtracking(root) {
    if (root === null) {
      return;
    }

    let right = backtracking(root.right);
    let left = backtracking(root.left);

    root.right = prev;
    root.left = null;
    prev = root;
  }

  backtracking(root);
};

//solution 2 is same method but using level order solution we use stack

var flatten = function (root) {
  if (!root) return [];

  let stack = [];

  stack.push(root);

  while (stack.length > 0) {
    let cur = stack.pop();

    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }

    if (stack.length > 0) {
      cur.right = stack[stack.length - 1];
    }

    cur.left = null;
  }
};

///MORRIS TRAVERSAL we connect a thread

var flatten = function (root) {
  let current = root;

  while (current) {
    if (current.left !== null) {
      let prev = current.left;

      while (prev.right !== null) {
        prev = prev.right;
      }

      prev.right = current.right;

      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
};
