//problem https://leetcode.com/problems/merge-in-between-linked-lists/description/

/*
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result*/

function mergeBetween(list1, a, b, list2) {
  let dummynode = new ListNode(-1, list1);
  let prev = dummynode;

  for (let i = 0; i < a; i++) {
    prev = prev.next;
  }

  let start = prev.next;
  let end = start;
  for (let i = a; i < b; i++) {
    end = end.next;
  }
  let next = end.next;
  let temp = list2;
  prev.next = temp;

  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = next;

  return dummynode.next;
}
