//problem : https://leetcode.com/problems/remove-linked-list-elements/description/

//soluiton

function removelistElement(head, val) {
  if (val === null) return null;

  let current = head;

  while (current !== null && current.val === val) {
    head = current.next;
    current = head;
  }
  while (current !== null && current.next !== null) {
    if (current.next === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
