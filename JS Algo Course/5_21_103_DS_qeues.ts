class Node {
  constructor(val) {
    this.val = val;
    this.next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    let tmp = new Node(val);
    if (this.head == null) {
      this.head = tmp;
      this.tail = tmp;
      this.length++;
      return this;
    }
    this.tail.next = tmp;
    this.tail = tmp;
    this.length++;
    return this;
  }
  dequeue() {
    if (this.head == null) return this;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }
  traverse() {
    if (this.head == null) {
      return this;
    }
    let tmp = this.head;
    while (tmp) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
    return this;
  }
}

console.clear();

let queue = new Queue();
console.log("--- ENQUEUE");
queue
  .enqueue("1")
  .enqueue("2")
  .enqueue("3")
  .traverse();
console.log("--- DEQUEUE");
queue.dequeue().traverse();
