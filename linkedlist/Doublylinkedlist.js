class createnode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Doublylinkedlist {
  constructor(value) {
    let newnode = new createnode(value);
    this.head = newnode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newnode = new createnode(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    }
    this.tail.next = newnode;
    newnode.prev = this.tail;
    this.tail = newnode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.tail;

    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
  }
}
let ddl = new Doublylinkedlist(100);
ddl.push(200);
console.log(ddl);

////////////////////using function ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createnode(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function doublylinkedlist(value) {
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
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log("Value:", current.value);
    console.log("Next:", current.next ? current.next.value : null);
    console.log("Prev:", current.prev ? current.prev.value : null);
    current = current.next;
  }
}

let list = doublylinkedlist([1, 2, 3]);

printList(list);
