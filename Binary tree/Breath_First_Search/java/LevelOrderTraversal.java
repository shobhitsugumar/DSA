class Node{
    int data;
    Node left ;
    Node right ;

    public Node(int data){
        this.data = data;
        left = null;
        right=null;
    }
}


class LevelOrderTraversal{
     public void levelOrderTraversal(Node root) {
        if (root == null) {
            return;
        }

        // Queue for traversing nodes level by level
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            Node currentNode = queue.poll(); // Dequeue the current node
            System.out.print(currentNode.data + " "); // Print current node data

            // Enqueue left child
            if (currentNode.left != null) {
                queue.add(currentNode.left);
            }

            // Enqueue right child
            if (currentNode.right != null) {
                queue.add(currentNode.right);
            }
        }
     }


}