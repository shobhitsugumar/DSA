var mergeTwoLists = function (list1, list2) {
  let dummynode = new ListNode();
  let temp = dummynode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      temp = temp.next;
      list1 = list1.next;
    } else {
      temp.next = list2;
      temp = temp.next;
      list2 = list2.next;
    }
  }
  if (list1) {
    temp.next = list1;
  }
  if (list2) {
    temp.next = list2;
  }

  return dummynode.next;
};
