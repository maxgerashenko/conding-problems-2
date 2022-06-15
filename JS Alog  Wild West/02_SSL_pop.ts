class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
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
  pop() {
    if (this.tail == null) return undefined;
    if (this.tail === this.head) {
      let removed = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    }
    let tmp = this.head;
    while (tmp.next.next !== null) {
      tmp = tmp.next;
    }
    let removed = tmp.next;
    tmp.next = null;
    this.length--;
    this.tail = tmp;
    return removed;
  }
}
