/*
148. Sort List :https://leetcode.com/problems/sort-list/description/

*/

// to find the middle
function findmiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//merging two list
function mergelist(list1, list2) {
  let dummynode = new ListNode(-1);
  let temp = dummynode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      temp = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      temp = list2;
      list2 = list2.next;
    }
  }
  if (list1) {
    temp.next = list1;
  } else {
    temp.next = list2;
  }
  return dummynode.next;
}

//merge sort
var sortList = function (head) {
  if (!head || head.next === null) {
    return head;
  }
  let middle = findmiddle(head);
  let lefthead = head;
  let righthead = middle.next;
  middle.next = null;

  lefthead = sortList(lefthead);
  righthead = sortList(righthead);
  return mergelist(lefthead, righthead);
};
