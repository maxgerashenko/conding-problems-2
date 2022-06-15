console.clear();

class Node {
  constructor(val, prior) {
    this.value = val;
    this.priority = prior;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  getParentIdex(n) {
    return ~~((n - 1) / 2);
  }
  getChilderIndexes(n) {
    return [n * 2 + 1, n * 2 + 2];
  }
  enqueue(val, prior) {
    let node = new Node(val, prior);
    this.values.push(node);
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIdex(childIndex);
    while (
      this.values[childIndex].priority < this.values[parentIndex].priority
    ) {
      [this.values[childIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[childIndex]
      ];
      childIndex = parentIndex;
      parentIndex = this.getParentIdex(childIndex);
    }
    return this;
  }
  denqueue() {
    let parentIndex = 0,
      root = this.values.shift(),
      [left, right] = this.getChilderIndexes(parentIndex);
    // insert last element to the root
    // and down bubble the tree
    this.values.unshift(this.values.pop());
    // easy win when priority queueis empty
    if (this.values.length === 0) return root;
    while (
      (this.values[left] &&
        this.values[parentIndex].priority > this.values[left].priority) ||
      (this.values[right] &&
        this.values[parentIndex].priority < this.values[right].priority)
    ) {
      this.values[left].priority > this.values[right].priority
        ? ([this.values[left], this.values[parentIndex]] = [
            this.values[parentIndex],
            this.values[left]
          ])
        : ([this.values[right], this.values[parentIndex]] = [
            this.values[parentIndex],
            this.values[right]
          ]);
      parentIndex = this.values[left] > this.values[right] ? left : right;
      [left, right] = this.getChilderIndexes(parentIndex);
    }

    return this;
  }
  traverse() {
    this.values.map(n => console.log(n.value));
  }
}

// mistackes is habbit too
// check spelling for typical mistackes
// it should be easy to find
console.log("--- PRIORITY_QUEUE");
let pq = new PriorityQueue();
console.log(pq.values);

console.log("--- ENQUEUE");
pq.enqueue(5, 5)
  .enqueue(6, 6)
  .enqueue(1, 1)
  .enqueue(4, 4)
  .enqueue(2, 2)
  .enqueue(3, 3)
  .enqueue(0, 0);
pq.traverse();

console.log("--- DENQUEUE");
pq = new PriorityQueue();
pq.enqueue(3, 3);
pq.enqueue(1, 1);
pq.enqueue(2, 2);
pq.traverse();
console.log("--- DENQUEUE result");
pq.denqueue();
pq.traverse();
