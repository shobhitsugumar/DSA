//problem : 2807. Insert Greatest Common Divisors in Linked List  : https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

/*
Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.


solution : to find the GCD we use Euclidean algorithm 
           then we just create a new node and link in between 
*/

//using Euclidean algorithm
function GCD(n1, n2) {
  let a = Math.abs(n1);
  let b = Math.abs(n2);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function gcdlist(head) {
  let current = head;
  while (current !== null && current.next !== null) {
    let gcdvalue = GCD(current.val, current.next.val);
    let gcdnode = new ListNode(gcdvalue);

    gcdnode.next = current.next;
    current.next = gcdnode;
    current = gcdnode.next;
  }
  return head;
}
