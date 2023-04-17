/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length === 0) return [];
  if (k >= nums.length) return nums;
  nums.sort();
  let maxHeap = new Heap((a, b) => b.count - a.count);
  let mapCount = {};
  let pre = null;
  for (let num of nums) {
    if (mapCount[num] == null) {
      if (pre != null) {
        maxHeap.insert({ value: pre, count: mapCount[pre] });
      }
      pre = num;
      mapCount[num] = 0;
    }
    mapCount[num]++;
  }
  maxHeap.insert({ value: pre, count: mapCount[pre] });
  let result = [];
  while (k > 0) {
    let el = maxHeap.removeTop();
    if (el === null) break;

    result.push(el.value);
    k--;
  }
  return result;
};

class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator || ((a, b) => a - b);
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.comparator(this.heap[index], this.parent(index)) < 0
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  removeTop() {
    if (this.heap.length === 0) return null;

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return top;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.comparator(this.rightChild(index), this.leftChild(index)) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) < 0) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }
}
