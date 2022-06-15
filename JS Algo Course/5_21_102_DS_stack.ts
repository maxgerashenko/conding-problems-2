console.clear();

// ** PLAN **
// need class node
// node has val
// node has next
// need class Stack
// stack has head
// stack has tail
// stack has length
// stack has push
// stack has pop

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    this.length++;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return this.length;
    }
    let tmp = this.head;
    this.head = node;
    this.head.next = tmp;
    console.log(tmp.val);
    return this.length;
  }
  pop() {
    if (this.head == null) {
      return null;
    }
    let tmp = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      console.log(tmp.val);
      return tmp;
    }
    this.head = this.head.next;
    console.log(tmp.val);
    return tmp;
  }
}

let stack = new Stack();
console.log("--- PUSH");
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
console.log(stack.head.val);
console.log("--- POP");
stack.pop();
stack.pop();
stack.pop();
console.log(stack.head && stack.head.val);
