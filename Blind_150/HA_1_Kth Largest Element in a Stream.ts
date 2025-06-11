// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
// Kth Largest Element in a Stream

// Min Heap to get K Max val
// works for steam
// don't add val if < then min
// to keep consistent remove than add
// Add T:O(longN), Read O(1), Remove T:o(logN) S:O(k)

class KthLargest {
  minHeap = new Heap((a, b) => a - b);
  k = 0;
  constructor(k: number, nums: number[]) {
    this.k = k;
    for (let el of nums) {
      this.add(el);
    }
  }

  add(val: number): number {
    // console.log(this.minHeap.heap);
    if (this.minHeap.heap.length < this.k) {
      this.minHeap.add(val);
      return this.minHeap.peek();
    }
    if (val < this.minHeap.peek()) return this.minHeap.peek();

    this.minHeap.add(val);
    this.minHeap.remove();
    return this.minHeap.peek();
  }
} // T:O(logn) S:O(K)
