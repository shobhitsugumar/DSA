class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class InorderTraversal {
  Inorder(root) {
    if (root === null) {
      return;
    }

    this.Inorder(root.left);
    console.log(root.data);
    this.Inorder(root.right);
  }
}

function main() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  let traversal = new InorderTraversal();
  traversal.Inorder(root);
}

main();
