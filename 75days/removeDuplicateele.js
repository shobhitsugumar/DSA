var deleteDuplicates = function (head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};
