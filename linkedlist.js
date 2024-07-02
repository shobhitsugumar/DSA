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
  }
}

let link = new linkedlist(100);
link.push(200);
link.push(300);
link.push(400);

link.showall();
