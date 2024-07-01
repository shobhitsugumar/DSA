/*class circularQueue{
    constructor(size){
        this.size=size
        this.front=-1
        this.rear=--1
        this.items= new Array(size)
        this.currentsize=0

    }

    Enqueue(value){
        if(this.currentsize!==this.size){
            if(this.rear===this.size-1 ){
                this.rear=0
            }else{
                this.rear++
            }
            this.items[this.rear]=value
            this.currentsize++
            if(this.front ===-1){
                this.front=this.rear
            }
        }
    }

    dequeue(){
        if(this.currentsize!==0){
            this.items[this.front]=null
            if(this.front===this.size-1){
                this.front=0

            }else{
                this.front++
            }
            this.currentsize--
        }
        else{
            this.rear=-1
            this.front=-1
        }
    }
}

let queue= new circularQueue(5)
*/

class circularQueue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.array = new Array(size);
    this.currentsize = 0;
  }
  Enqueue(value) {
    if (this.currentsize !== this.size) {
      this.rear = (this.rear + 1) % this.size;
      this.array[this.rear] = value;
      this.currentsize++;
      if (this.front === -1) {
        this.front = 0;
      }
    } else {
      console.log("the queue is full");
    }
  }
  dequeue() {
    if (this.currentsize !== 0) {
      this.array[this.front] = null;
      this.front = (this.front + 1) % this.size;
      this.currentsize--;
    } else {
      this.rear = -1;
      this.front = -1;
      console.log("the queue is empty");
    }
  }
  show() {
    console.log(this.array);
  }
}

let queue = new circularQueue(5);

queue.Enqueue(10);

queue.Enqueue(20);

queue.Enqueue(30);

queue.Enqueue(40);

queue.Enqueue(50);

queue.dequeue();

queue.Enqueue(90);

queue.show();
