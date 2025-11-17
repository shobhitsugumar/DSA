var connect = function (root) {
  if (!root) return root;

  let cur = root;

  while (cur !== null) {
    let dummy = new Node();

    let tail = dummy;

    while (cur !== null) {
      if (cur.left) {
        tail.next = cur.left;
        tail = tail.next;
      }

      if (cur.right) {
        tail.next = cur.right;
        tail = tail.next;
      }
      cur = cur.next;
    }
    cur = dummy.next;
  }
  return root;
};
