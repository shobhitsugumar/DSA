class linkedlist {
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
