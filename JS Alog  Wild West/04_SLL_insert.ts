class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
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
  insert(index, val) {
    let node = new Node(val);
    // if list is empty
    if (this.head == null && index === 0) this.push(val);
    // insert in the begining
    // isert in the begining if index is > 0
    if (this.head == null && index > 0) return false;
    if (index === 0) this.push(val);
    // insert in the middle
    let tmp = this.head;
    while (index - 1 > 0) {
      // if index is biger than end
      if (tmp == null) return false;
      tmp = tmp.next;
      index--;
    }
    // insert
    let tmp_next = tmp.next;
    tmp.next = node;
    node.next = tmp_next;
    // increase length
    this.length++;
    // insert in the end
    if (node.next == null) this.tail = node;
    // return true
    return true;
  }
}
