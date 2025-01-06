//post order using iterative method using two stack

class iterativePostorder {
  postorder(root) {
    let stack1 = [];
    let stack2 = [];
    let result = [];

    stack1.push(root);

    while (stack1.length > 0) {
      let currentnode = stack1.pop();
      stack2.push(currentnode);

      if (currentnode.left !== null) {
        stack1.push(currentnode.left);
      }

      if (currentnode.right !== null) {
        stack1.push(currentnode.right);
      }
    }

    while (stack2.length > 0) {
      result.push(stack2.pop().val);
    }
    return result;
  }
}

let root = new iterativePostorder();
root.postorder(/*pass the nodes here */);
