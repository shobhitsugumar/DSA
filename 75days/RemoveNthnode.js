var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  //find the size
  let size = 0;

  let curr = head;

  while (curr !== null) {
    size++;
    curr = curr.next;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let current = head;
  for (let i = 1; i <= size - n; i++) {
    current = current.next;
    prev = prev.next;
  }

  prev.next = current.next;

  return dummy.next;
};
