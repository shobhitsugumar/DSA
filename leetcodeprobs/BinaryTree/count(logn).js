//problem 222. Count Complete Tree Nodes less than O(n)

/**
 *
 * solution is to use the  formula 2^h -1 where h is the height
 *
 *          * we traverse the node in left and right we find the height of the left and right and we compare if both the left and right is equal
 *            if its equla then we return using the formula
 *          * if its not equal then we travese left and right  and we add one (current node count)
 */

var countNodes = function (root) {
  if (!root) return 0;

  let left = leftheight(root);
  let right = rightheight(root);

  if (left === right) {
    return (1 << left) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

function leftheight(root) {
  let count = 0;
  while (root) {
    count++;
    root = root.left;
  }
  return count;
}

function rightheight(root) {
  let count = 0;
  while (root) {
    count++;
    root = root.right;
  }
  return count;
}
