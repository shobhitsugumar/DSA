class Node{
    int data;
    Node left ;
    Node right;

    public Node(int data){
        this.data= data;
        left = null ;
        right = null;
    }

}

public class PostOrderTraversal{
    

    public void postOrder(Node root){
        if(root==null){
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        System.out.println(root.data);

    }
    

    public static void main(String args[]){

        Node root =new Node(1);
        root.left= new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right= new Node(5);
        root.right.left=new Node(6);
        root.right.right=new Node(7);

        PostOrderTraversal traversal = new PostOrderTraversal();
        traversal.postOrder(root);

    }
}