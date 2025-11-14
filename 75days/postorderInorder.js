var buildTree = function (inorder, postorder) {
  if (!postorder.length || !inorder.length) {
    return null;
  }

  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let postindex = postorder.length - 1;

  function helper(left, right) {
    if (left > right) {
      return null;
    }

    let rootval = postorder[postindex--];
    let root = new TreeNode(rootval);
    let mid = map.get(rootval);

    root.right = helper(mid + 1, right);
    root.left = helper(left, mid - 1);

    return root;
  }

  return helper(0, inorder.length - 1);
};
