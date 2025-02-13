/**
 * problem : 1339. Maximum Product of Splitted Binary Tree
 * 
 *           Input: root = [1,2,3,4,5,6]
             Output: 110
E            Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)

 * solution : the solution is
 *            to we find the total sum of the binary tree 
 *            we take the node and subtract and mul with subtree  with the total sum and which is max we take that product 
 * 
 *           read the code u will get it 
 */

//solution

function maxsplitbt(root) {
  let res = []; //we store all the subtree here  so that we can mul and subtract with the total sum

  function totalsum(root) {
    if (!root) return 0;

    if (!root.left && !root.right) {
      //if there is no left and right we simply return the value
      return root.val;
    }

    //then we go left
    let suml = totalsum(root.left);
    //we go right
    let sumr = totalsum(root.right);

    //we push all the subnode into the array so that we can take each sub node and mul and sub with the total sum
    res.pus(suml, sumr);
    return root.val + suml + sumr;
  }

  let total = totalsum(root);

  let max = 0;

  //here what we are doing is the value (subtree value )that are stored in the array we go through it
  // so consider we have a tree [1,2,3,4,5,6]
  /**
   *             1
   *
   *          2      3
   *
   *        4   5   6
   *  1) so we check if the sub tree is 4 then we take all the value then the value will be 4 * [2+5+1+3+6]= 4 * 17 =68
   *  like wise we do now the sub tree we will take is 4+2+5 * 1+3+6 =11 * 10 = 110 so this will be max compare to 68 like wise we do
   *  so that only we store the sub tree in res
   *  the res will be holding res [ 4,5,,11,6,9]
   *  so for each if we do subtree * (total -subtree ) we get the max product
   *  why total -subtree we take total and  - the subtree eg 21 total ,subtree 4 so 21 -4 we get 17
   *  so 4 * 17 = 68 (same as we saw in the point 1)
   *  */

  for (let subtree of res) {
    let ans = subtree * (total - subtree);

    max = Math.max(ans, max);
  }
  return max;
}
