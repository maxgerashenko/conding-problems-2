class Heap {
  heap = [];
  comparator: (a, b) => {};
  constructor(comparator) {
    this.comparator = comparator || ((a, b) => a - b);
  }

  size = () => this.heap.length;
  isEmpty = () => this.heap.length === 0;
  peek = () => (this.isEmpty() ? null : this.heap[0]);

  private getParentIndex = (index) => Math.floor((index - 1) / 2);
  private getLeftChildIndex = (index) => index * 2 + 1;
  private getRightChildIndex = (index) => index * 2 + 2;
  private hasParent = (index) => this.getParentIndex(index) >= 0;
  private hasChild = (index) => index < this.heap.length;
  private parent = (index) => this.heap[this.getParentIndex(index)];
  private leftChild = (index) => this.heap[this.getLeftChildIndex(index)];
  private rightChild = (index) => this.heap[this.getRightChildIndex(index)];

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  removeTop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) {
      return this.heap.shift();
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return top;
  }

  private swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
  private heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.comparator(this.heap[index], this.parent(index)) < 0
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  private heapifyDown() {
    let index = 0;
    while (this.hasChild(this.getLeftChildIndex(index))) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasChild(this.getRightChildIndex(index)) &&
        this.comparator(this.rightChild(index), this.leftChild(index)) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) < 0)
        break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}
