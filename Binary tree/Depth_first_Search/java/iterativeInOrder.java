

class IterativeInOrder{
    public List<Integer> inOrderTraversal(Node root){
        List<Integer> result = new ArrayList<>();
        Stack<Node> st = new Stack<Node>();

        Node node = root;

        while(true){
            //if the node is not null we push it to the stack
            if(node !=null){
                stack.push(node);
                //now node becomes left 
                node = node.left;
            }
            else{
                //if the stack is empty so no need to further search so we break 
                if(stack.isEmpty){
                    break;
                }

                node = node.pop()
                result.add(node.val);
                node = node.right
            }

        }
        return result;

    } 
}