// problem : https://leetcode.com/problems/remove-nodes-from-linked-list/description/

/*
 You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.

Example 1:
Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

*/

/* solution : the approch is to reverse the liked list .why do we reverse ? The original problem requires removing nodes from a linked list if there is any node to the right with a greater value. Directly comparing each node with all nodes to its right would require a nested traversal,
               leading to a time complexity of 𝑂(𝑛2).By reversing the linked list, you transform the problem of comparing each node with nodes to its right into a simpler problem of comparing each node with nodes to its left. 
               This can be done in a single pass, which reduces the time complexity.
               
               then keep a max to keep track of max value 
               then again reverse it


*/
function reverselist(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function removeRightnode(head) {
  let newhead = reverselist(head);
  let dummynode = new Node(-1, newhead);
  let prev = dummynode;
  let current = newhead;
  let max = -Infinity;

  while (current !== null) {
    if (current.val >= max) {
      max = current.val;
      prev = current;
    } else {
      prev.next = current.next;
    }
    current = current.next;
  }
  return reverselist(dummynode.next);
}
