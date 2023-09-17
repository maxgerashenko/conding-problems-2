// https://leetcode.com/problems/find-median-from-data-stream/description/
// Find Median from Data Stream

// use maxHeap MinHeap
// add to max first
// max.length <= min.length-1
// swap if max.val > min.val
// return total%2 ? max.val : max/2+min/2
// T:O(logN) S:O(1)

class MedianFinder {
  maxHeap = new Heap((a, b) => b - a);
  minHeap = new Heap((a, b) => a - b);
  constructor() {}

  addNum(num: number): void {
    this.maxHeap.add(num);

    if (this.maxHeap.heap.length > this.minHeap.heap.length + 1) {
      this.minHeap.add(this.maxHeap.remove());
    }
    if (this.maxHeap.peek() > this.minHeap.peek()) {
      this.minHeap.add(this.maxHeap.remove());
      this.maxHeap.add(this.minHeap.remove());
    }
  }

  findMedian(): number {
    return (this.maxHeap.heap.length + this.minHeap.heap.length) % 2 === 0
      ? this.maxHeap.peek() / 2 + this.minHeap.peek() / 2
      : this.maxHeap.peek();
  }
} // T:O(logN) S:O(1)
