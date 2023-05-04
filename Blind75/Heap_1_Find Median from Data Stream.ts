// https://leetcode.com/problems/find-median-from-data-stream/
// Find Median from Data Stream

// fix size first
// then fix order

class MedianFinder {
  minHeap = new Heap((a, b) => a - b);
  maxHeap = new Heap((a, b) => b - a);
  constructor() {}
  addNum(val: number): void {
    if (val == null) return;
    this.maxHeap.insert(val);
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.insert(this.maxHeap.removeTop());
    }
    if (
      this.minHeap.peek() != null &&
      this.maxHeap.peek() > this.minHeap.peek()
    ) {
      this.maxHeap.insert(this.minHeap.removeTop());
      this.minHeap.insert(this.maxHeap.removeTop());
    }
  }
  findMedian(): number {
    console.log(this.maxHeap.size(), this.minHeap.size());
    return this.maxHeap.size() === this.minHeap.size()
      ? (this.maxHeap.peek() + this.minHeap.peek()) / 2
      : this.maxHeap.peek();
  }
} //  addNum() T:O(log n), findMedian() O(1),  S:O(n)
