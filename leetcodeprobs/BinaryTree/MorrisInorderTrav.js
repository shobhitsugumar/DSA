/**
 * Morris inorder traversal : using thread traversal
 *       in inorder what are all the case :
 *                    case 1 : that if the left node is null we print the current val and return to the parent like ( left ,root ,right )
 *                    case 2 : after we print the left we move up inorder we use recursion here we cant so what we do is  we connect the
 *                             right node to the parent node
 *                    case 3 : after we print we cut the connection between the right node and the parent back to null
 *
 */
//solution

var inorderTraversal = function (root) {
  let current = root;
  let inorder = [];

  while (current !== null) {
    if (current.left === null) {
      inorder.push(current.val);
      current = current.right;
    } else {
      let prev = current.left;
      while (prev.right && prev.right !== current) {
        prev = prev.right;
      }
      if (prev.right === null) {
        prev.right = current;
        current = current.left;
      } else {
        prev.right = null;
        inorder.push(current.val);
        current = current.right;
      }
    }
  }
  return inorder;
};
