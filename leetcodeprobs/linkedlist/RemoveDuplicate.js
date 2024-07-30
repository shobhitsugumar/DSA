/*
82. Remove Duplicates from Sorted List II : https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

solution we use two while loop to traverse

 */

function removeDuplicate(head) {
  let dummynode = new ListNode(0, head);
  let prev = dummynode;
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }
  return dummynode.next;
}
