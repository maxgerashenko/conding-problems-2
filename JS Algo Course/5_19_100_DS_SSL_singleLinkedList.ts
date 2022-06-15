console.clear();
class Node {
  val = null;
  next = null;
  constructor(val) {
    this.val = val;
  }
}
class SiglyLinkedList {
  length = 0;
  head = null;
  tail = null;
  constructor() {}
  push(val) {
    // common first
    let tmp = new Node(val);
    this.length++;
    // easy win first
    if (this.head == null) {
      this.head = tmp;
      this.tail = tmp;
      return this;
    }
    this.tail.next = tmp;
    this.tail = tmp;
    return this;
  }
  pop() {
    // if there is no elements return null
    // loop throw the list untill you reach the tail
    // set the next property of the 2nd to the last node to be null (use pre)
    // set the tail to be 2nd to the last node
    // determinine the length of the list by 1
    // return the value of the node to be removed
    if (this.head == null) return null;
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      length = 0;
      return this.head;
    }
    let prev,
      tmp = this.head;
    while (tmp.next !== null) {
      prev = tmp;
      tmp = tmp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return tmp;
  }
  shift() {
    if (this.head == null) return null;
    let tmp = this.head;
    this.head = this.head.next;
    // dont't forget about the length
    this.length--;
    if (this.length === 0) this.tail = null;
    // don't forget to return
    return tmp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      // don't forget about all cases, lenght, head, tail
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let i = 0;
    let tmp = this.head;
    while (i < index) {
      tmp = tmp.next;
      i++;
    }
    return tmp;
  }
  set(index, val) {
    let tmp = this.get(index);
    if (tmp == null) return false;
    // getting the reference is not a good idea
    tmp.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.index) return !!this.push(val);
    let tmp = this.get(index);
    let next = tmp.next;
    tmp.next = new Node(val);
    tmp.next.next = next;
    return true;
  }
  remove(index) {
    // errors first
    if (index < 0 || index >= this.length) return undefined;
    // edge cases second
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    // rest of the logic
    let tmp = this.get(index - 1);
    tmp.next = tmp.next.next;
    // substract fromt the length
    this.length--;
    return tmp.next;
  }
  reverse() {
    if (this.head == null) return null;
    if (this.head == null) return this.head;
    let start = new Node();
    start.next = this.head;

    //       L T
    // s 1 2 3 4

    let last = start.next;
    while (last.next) {
      // save end element
      // over one connection
      // end to start connection
      // start and end connection
      let tmp = last.next;
      last.next = tmp.next;
      tmp.next = start.next;
      start.next = tmp;
    }

    this.head = start.next;
    this.tail = last;
    return this.head;
  }
  traverse() {
    let tmp = list.head;
    // traverse
    while (tmp !== null) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }
}
console.log("--- PUSH");
let list = new SiglyLinkedList();
list
  .push("0")
  .push("1")
  .push("2")
  .push("3")
  .push("4")
  .push("5");
list.traverse();

console.log("--- POP");
tmp = list.pop();
while (tmp) {
  tmp = list.pop();
}
list.traverse();

list.push("1").push("2");
console.log("--- SHIFT");
list.shift().val;
list.shift().val;
list.traverse();
console.log("--- UNSHIFT");
list.unshift("1").unshift("2");
list.traverse();
console.log("--- GET");
console.log(list.get(-1));
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(3));
console.log("--- SET");
list.set(0, "0");
list.traverse();
console.log("--- INSERT");
console.log(list.insert(-5, "-5"));
console.log(list.insert(5, "5"));

list.insert(0, "-2");
list.insert(0, "-3");
list.insert(1, "-1");
list.traverse();

console.log("--- REMOVE");
list.traverse();
console.log("remove", list.remove(1).val);
console.log("remove", list.remove(0).val);
list.traverse();

console.log("--- REMOVE");
list.shift();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.traverse();
console.log("---");
console.log("--- REVERSE");
console.log(list.reverse());
list.traverse();

// Array
// insertion - O(n) need reindex
// deletion - O(n);
// Access - O(1);

// Link List O()
// insertion(push, unshift) - O(1)
// removal removing form the start O(1) from the end O(n-1)
// searching - O(n)
// acess - O(n)

// RECAP
// Linked list is good replacement of the Array
// when Insertion and deletion is friequently required
// Doesn't not have index
