class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class LevelOrderTraversal {
  levelOrder(root) {
    if (root === null) {
      return;
    }

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const number = queue.shift();
      console.log(number.data);

      if (number.left) {
        queue.push(number.left);
      }

      if (number.right) {
        queue.push(number.right);
      }
    }
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

  let traversal = new LevelOrderTraversal();
  traversal.levelOrder(root);
}

main();
