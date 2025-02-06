/**
 * Convert sorted array to binary tree :https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 *   [-10,-3,0,5,9]

 * solution : as we know the given arrya is sorted in ascending order
              
              The CONCEPT : we take the mid of the array 
                            so the left side of the mid will be left sub tree 
                               the right side of the mid will be right sub tree 

                          what we do is we find the mid 
                          then we do root.left = we call the recursion from left to mid -1 
                          for root.right = we call the recursion from mid +1 to right
                                                       
                          [-10,   -3,    0,      5,   9]
 *                         {l}          (mid)         {r}   intialie it will be like this 

                          then again we go left so   [-10,    -3,      0,    5,            9]
                                                      {l}  left sub  [mid]  right root     {r}   
 *
 */

//solution

function sorted2BT(nums) {
  //intially we pass the left and right value

  function preorder(left, right) {
    //if left exceeds the right the we return
    if (left > right) return null;

    //we take the mid value
    let mid = new TreeNode(nums[mid]);

    root.left = preorder(left, mid - 1);
    root.right = preorder(mid + 1, right);

    return root;
  }
  return preorder(0, nums.length - 1);
}
