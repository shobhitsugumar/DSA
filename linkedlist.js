/*class linkedlist {
  constructor(data) {
    //intialie the head and tail will be equal
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }
  appendnode(nodedata) {
    //this will become tail & the the next value of the head will become this one
    let node = {
      value: nodedata,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
  }
  showlist() {
    console.log(this.head);
    console.log(this.tail);
  }
}
let link = new linkedlist(100);
link.appendnode(200);
link.appendnode(300);
link.showlist();

//using function constructor

function linkedlist(data) {
  this.head = {
    value: data,
    next: null,
  };
  this.tail = this.head;
}

linkedlist.prototype.addnode = function (nodedata) {
  let node = {
    value: nodedata,
    next: null,
  };
  this.tail.next = node;
  this.tail = node;
};
linkedlist.prototype.showall = function () {
  console.log(this.head);
  console.log(this.tail);
};

let link = new linkedlist(100);
link.addnode(200);
link.addnode(300);
link.showall();


class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class linkedlist {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  //push

  push(data) {
    let n = new Node(data);

    if (!this.head) {
      this.head = n;
      this.tail = n;
    }
    this.tail.next = n;
    this.tail = n;
    this.length++;
  }

  //pop

  pop() {
    let temp = this.head;
    let prev = this.head;

    if (!this.head) {
      return undefined;
    }
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  //unshift

  unshift(data) {
    let newnode = new Node(data);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    }
    let temp = this.head;
    this.head = newnode;
    this.head.next = temp;
    this.length++;
  }

  showall() {
    console.log("head", this.head);
    console.log("tail", this.tail);
    console.log(this.length);
  }
}

let link = new linkedlist(50);
link.unshift(100);
link.unshift(25);

link.showall();

*/
class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class linkedlist {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  push(data) {
    let newnode = new Node(data);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    }
    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;

    if (!this.head) {
      return undefined;
    }

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(data) {
    let newnode = new Node(data);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    }

    newnode.next = this.head;
    this.head = newnode;

    this.length++;
  }

  //shift

  shift() {
    if (!this.head) {
      return undefined;
    }

    //1. point the first node element

    let temp = this.head;

    //2. move the head to next node

    this.head = this.head.next;

    //3 remove the prev node

    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  //getting element by index

  indexing(no) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === no) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }

  showall() {
    console.log("head", this.head);
    console.log("tail", this.tail);
    console.log(this.length);
  }
}
let link = new linkedlist(100);

link.push(200);
link.push(300);
console.log(link.set(1, 50));

//////////////////////////////////////////////////////////  USING SIMPLE FUNCTION
/*
function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function crtlinkedlist(value) {
  if (value.length === 0) {
    return undefined;
  }
  let head = createNode(value[0]);
  let tail = head;

  for (let i = 1; i < value.length; i++) {
    tail.next = createNode(value[i]);
    tail = tail.next;
  }
  return head;
}

let linkelist = crtlinkedlist([1]);

function push(value, head) {
  let newnode = createNode(value);

  let current = head;

  if (!head) {
    head = newnode;
    return head;
  }

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newnode;

  return head;
}

function pop(head) {
  if (!head) {
    return undefined;
  }

  if (!head.next) {
    return undefined;
  }

  let temp = head;
  let prev = null;

  while (temp.next) {
    prev = temp;
    temp = prev.next;
  }
  if (prev) {
    prev.next = null;
  }

  return head;
}

console.log(pop(linkelist));
*/
