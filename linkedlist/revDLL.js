function createnode(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function Doublylinkedlist(value) {
  let head = new createnode(value[0]);
  let tail = head;

  if (value.length === 0) {
    return undefined;
  }

  for (let i = 1; i < value.length; i++) {
    let temp = tail;
    tail.next = new createnode(value[i]);
    tail = tail.next;
    tail.prev = temp;
  }
  return head;
}
function reversing(head) {
  if (!head) {
    return undefined;
  }
  if (!head.next) {
    return head;
  }

  let current = head;
  let last = null;

  while (current !== null) {
    last = current.prev;
    current.prev = current.next;
    current.next = last;

    current = current.prev;
  }
  console.log("lastvalue", last);
  return last.prev;
}

function printvalue(head) {
  let current = head;
  while (current !== null) {
    console.log("value", current.value);
    console.log("next", current.next ? current.next.value : null);
    console.log("prev", current.prev ? current.prev.value : null);
    current = current.next;
  }
}
let list = Doublylinkedlist([1, 2]);
let reversedlist = reversing(list);

printvalue(reversedlist);
