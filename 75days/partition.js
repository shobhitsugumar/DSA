var partition = function (head, x) {
  let dummynode = new ListNode(0, head);
  let dummnode2 = new ListNode();
  let prev1 = dummynode;
  let prev2 = dummnode2;
  let temp = head;

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
  prev1.next = dummnode2.next;
  return dummynode.next;
};
