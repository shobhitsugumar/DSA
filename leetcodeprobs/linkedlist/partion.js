/*
86. Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
*/

//soluition :take two dummynodes and put the number which are lower than x in one node and greater in another node and concatenate

//time complexity :O(n)
//space complexity : O(1)

//////////////////////////////////// solution //////////////////////??????????

var partition = function (head, x) {
  let dummynode = new ListNode(-1, head);
  let dummynode2 = new ListNode(-1);
  let temp = head;
  let prev1 = dummynode;
  let prev2 = dummynode2;

  while (temp !== null) {
    if (temp.val < x) {
      prev1 = temp;
    } else {
      prev1.next = temp.next;
      prev2.next = temp;
      prev2 = prev2.next;
    }
    temp = temp.next;
  }
  prev2.next = null;
  prev1.next = dummynode2.next;

  return dummynode.next;
};
