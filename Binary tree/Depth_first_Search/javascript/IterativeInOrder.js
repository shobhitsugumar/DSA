//inorder traversal using iterative method = left root right

class IterativeInorder {
  iterative(root) {
    let stack = [];
    let result = [];

    let node = root;

    while (true) {
      if (node !== null) {
        stack.push(node);
        node = node.left;
      } else {
        if (stack.length === 0) {
          break;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
      }
    }
    return result;
  }
}
