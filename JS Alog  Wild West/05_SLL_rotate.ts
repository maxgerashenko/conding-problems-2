class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  rotate(step) {
    // positive numbers
    if (step > 0) step = step % this.length;
    if (step < 0) step = this.length - (Math.abs(step) % this.length);

    // easy win
    if (step === 0) return this;

    let tmp = this.head;
    while (step > 1) {
      tmp = tmp.next;
      step--;
    }
    let ex_next = tmp.next;
    let ex_head = this.head;
    let ex_tail = this.tail;
    tmp.next = null;
    this.tail = tmp;
    this.head = ex_next;
    ex_tail.next = ex_head;

    // 1 2  3  4  5
    // 0 1  2  3  4
    // 5 10 15 20 25 -> null

    // 5 10 15 -> null
    // 20 25 -> null
    // 20 25 -> 5 10 15 -> null

    return this.head;
  }
}
