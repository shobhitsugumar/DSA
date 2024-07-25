//3217. Delete Nodes From Linked List Present in Array

/* You are given an array of integers nums and the head of a linked list. 
Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5] */

//solution :we convert the array into set and check if the value of linked list node is there in the set

/*time complexity : for traversing the linked list = O(n)
                     we are traversing the set to find the value if if is there so O(m)
                     
                     it is = O(n+m)

                     since the set is smaller than the linked list we omit that by the rules of "Avoid lower values"

                     so the time complexity is O(n)

Space complexity : we are creating a set = O(m)
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//solution

/*
 Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
*/

function deletefromArray(head, nums) {
  let newset = new Set(nums);
  let dummynode = new ListNode(-1, head);
  let prev = dummynode;
  let current = head;

  while (current !== null) {
    if (newset.has(current.val)) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummynode.next;
}
