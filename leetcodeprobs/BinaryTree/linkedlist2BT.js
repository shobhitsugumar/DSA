/**
 * problem : convert the linked list to binary tree  in proper level
 *
 *           solution : is same as we do for array to binary tree
 *                      we find the middle of the linked list using the tortoise and fhare algo
 *                      then we create a new root using the mid val
 *                      then we go left (start ,till the mid )
 *                      then we go right (mid.next ,till the end)
 *
 */

//solution

var sortedListToBST = function (head) {
  if (!head) return null;

  //to find the middle node
  function middlenode(start, end) {
    let slow = start;
    let fast = start;

    //if fast is end or fast.next is end we stop
    while (fast !== end && fast.next !== end) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  function ConvertBT(start, end) {
    if (start === end) return null;

    let mid = middlenode(start, end);

    let root = new TreeNode(mid.val);

    root.left = ConvertBT(start, mid);
    root.right = ConvertBT(mid.next, end);

    return root;
  }
  return ConvertBT(head, null);
};
