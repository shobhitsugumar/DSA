var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  let map = new Map();

  // first we will traverse inorder and put that in the map so that we can easly get the position

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  // now we take the preorder value

  let preindex = 0;

  function helper(left, right) {
    if (left > right) {
      return null;
    }

    let rootval = preorder[preindex++];

    let root = new TreeNode(rootval);

    let mid = map.get(rootval);

    root.left = helper(left, mid - 1);

    root.right = helper(mid + 1, right);

    return root;
  }

  return helper(0, inorder.length - 1);
};
