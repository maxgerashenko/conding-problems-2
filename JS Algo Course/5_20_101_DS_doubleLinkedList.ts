console.clear();

// Node
// - val
// - prev
// - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoubleLinkedList
// head
// tail
// length
class DoubleLinkedList {
  head = null;
  tail = null;
  length = 0;
  constructor() {}
  push(val) {
    // ceate a new node
    // if empty set as head and tail
    // if not
    // set head next as new Node
    // set new node prev as head
    // return entire list
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return this.head;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return this.head;
  }
  pop() {
    // exeption
    // conner case
    // basic case
    if (this.head == null) return null;
    let tmp = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tmp;
    }
    tmp.prev.next = null;
    this.tail = tmp.prev;
    this.length--;
    tmp.prev = null;
    return tmp;
  }
  shift() {
    // store current in tmp
    // if the length is 1 haed and tail equal null

    // edge case
    // solution
    // return
    if (this.head == null) return null;
    let tmp = this.head;
    tmp.next == null;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return tmp;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return tmp;
  }
  unshift(val) {
    // add node to the beginings
    // create a new node with the value that is passed in
    // if the lendth is emptu set the head and the tail to the new node
    // set prev property of the head to the new node
    // set next prop of the new el to the head
    // update the haed to the new node
    // increment the index
    // return the list

    let tmp = new Node(val);
    if (this.head == null) {
      this.head = tmp;
      this.tail = tmp;
      this.length = 1;
      return;
    }
    tmp.next = this.head;
    this.head.prev = tmp;
    this.head = tmp;
    this.length++;
    return this.head;
  }
  get(index) {
    let el;
    if (index < 0 || index > this.length - 1) return null;
    if (index < ~~(this.length / 2)) {
      //       console.log('WORKING FROM THE START');
      el = this.head;
      while (index > 0) {
        el = el.next;
        index--;
      }
      return el;
    }
    //     console.log('WORKING FROM THE END');
    el = this.tail;
    index = this.length - 1 - index;
    while (index > 0) {
      el = el.prev;
      index--;
    }
    return el;
  }
  set(index, val) {
    let el = this.get(index);
    if (el == null) return false;
    el.val = val;
    return true;
  }
  insert(index, val) {
    // error
    // coner case
    // base case
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);
    let el = new Node(val);
    let beforNode = this.get(index - 1);
    let afterNode = beforNode.next;
    // list el list.next
    el.next = afterNode;
    el.prev = beforNode;
    beforNode.next = el;
    afterNode.prev = el;
    this.length++;
  }
  remove(index) {
    // error prone
    // conner case
    // base case
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.shift(index);
    if (index === this.length - 1) return !!this.pop(index);
    let beforNode = this.get(index - 1);
    let afterNode = beforNode.next;
    beforNode.next = afterNode.next;
    afterNode.next.prev = beforNode;
    this.length++;
  }
  reverse() {}
  traverse() {
    // conercase first
    if (this.head == null) return null;
    let tmp = this.head;
    while (tmp) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }
}
let dList = new DoubleLinkedList();
function ABC() {
  dList = new DoubleLinkedList();
  dList.push(0);
  dList.push(1);
  dList.push(2);
}
console.log("--- GET");
dList = new DoubleLinkedList();
dList.push(0);
dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
dList.push(5);
dList.push(6);
console.log(-1, dList.get(-1));
console.log(0, dList.get(0).val);
console.log(2, dList.get(2).val);
console.log(3, dList.get(3).val);
console.log(4, dList.get(4).val);
console.log(6, dList.get(6).val);
console.log(10, dList.get(10));
dList.pop();
dList.pop();
dList.pop();
console.log("--- SET");
ABC();
dList.set(-1, 999);
dList.set(0, 999);
dList.set(1, 999);
dList.set(2, 999);
dList.set(3, 999);
dList.traverse();
console.log("--- UNSHIFT");
dList = new DoubleLinkedList();
dList.unshift(2);
dList.unshift(1);
dList.unshift(0);
dList.traverse();
console.log("--- POP");
ABC();
dList.pop();
dList.traverse();
console.log("--- SHIFT");
ABC();
dList.shift();
dList.traverse();
console.log("--- List");
ABC();
dList.traverse();
console.log("--- PUSH");
ABC();
dList.traverse();
console.log("--- INSERT");
ABC();
dList.insert(-1, -1);
dList.insert(0, -1);
dList.insert(1, 999);
dList.insert(3, 3);
dList.insert(5, 5);
dList.traverse();
console.log("--- REMOVE");
ABC();
dList.remove(-1);
dList.remove(4);
dList.remove(0);
dList.remove(1);
dList.unshift(0);
dList.push(2);
dList.remove(1);
dList.traverse();
