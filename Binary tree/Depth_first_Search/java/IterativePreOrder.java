//PreOrder formula = root ,left,right

class IterativePreOrder{
    public List<Integer> preOrder(Node root){
        List<Integer> preOrder = new ArrayList<>();//to store result
        

        //base case 
        if(root ===null){
            return preOrder
        }

        //create a stack that can store obj type 
        Stack <Node> st = new Stack<>();

        st.push(root);

        while(!st.empty()){
            // Get the current node
            // from the top of the stack

            root =st.pop();

            // add the nodes value to the preorder(result)

            preOrder.add(root.val);

            if(root.right !==null){
                st.push(root.right);
            }

            if(root.left !==left){
                st.push(root.left);
            }

        }

        return preOrder;


    }
}