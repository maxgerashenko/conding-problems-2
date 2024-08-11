// Minimum Interval to Include Each Query
//
// https://leetcode.com/problems/minimum-interval-to-include-each-query/description/


// NOT READY


// add for start for each element
// remove only by end
function minInterval(intervals: number[][], queries: number[]): number[] {
  let lenQ = queries.length;
  let lenInt = intervals.length;
  let result = Array(lenQ).fill(-1); // -1 is default value
  let minHeap = new Heap((a, b) => a.val - b.val);
  let qIndexMap = {};
  intervals.sort((a, b) => a[0] - b[0]); // sort by start
  for (let i = 0; i < lenQ; i++) {
      let el = queries[i];
      if (qIndexMap[el] == null) {
          qIndexMap[el] = [];
      }
      qIndexMap[el].push(i);
  }
  queries.sort((a, b) => a - b); // sort by position

  // let pre = null;
  // for (let pos of queries) {
  //     if (pos == pre) continue; // ignore calculated positions

  //     while (intervals.length > 0 && intervals[0][0] <= pos) {
  //         if (intervals[0][1] < pos) {
  //             intervals.shift();
  //             continue; // ignore short end intervals
  //         }
  //         let [start, end] = intervals.shift();
  //         minHeap.add({ val: end - start + 1, end: end });
  //     }

  //     while (minHeap.heap.length > 0 && minHeap.peek().end < pos)
  //         minHeap.remove(); // clean up irrelevant

  //     if (minHeap.heap.length === 0) continue; // conner case

  //     let { val } = minHeap.peek();
  //     for (let index of qIndexMap[pos])
  //         result[index] = val;
  //     pre = pos;
  // }

  return result;
}; // T:O(NlogN + QlogQ)

class Heap {
  heap = [];
  comp;
  constructor(comp = (a, b) => a - b) {
      this.comp = comp;
  }

  // Helper Methods
  leftIndex = (index) => 2 * index + 1;
  rightIndex = (index) => 2 * index + 2;
  parentIndex = (index) => Math.floor((index - 1) / 2);
  hasParent = (index) => this.parentIndex(index) >= 0;
  parent = (index) => this.heap[this.parentIndex(index)];
  // Functions to create Min Heap
  swap(indexA, indexB) {
      [this.heap[indexA], this.heap[indexB]] = [
          this.heap[indexB],
          this.heap[indexA],
      ];
  }
  peek = () => (this.heap.length === 0 ? null : this.heap[0]);

  // Removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
      if (this.heap.length === 0) return null;
      const item = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown();
      return item;
  }
  add(item) {
      this.heap.push(item);
      this.heapifyUp();
  }
  heapifyUp() {
      let index = this.heap.length - 1;
      while (
          this.hasParent(index) &&
          this.comp(this.parent(index), this.heap[index]) > 0
      ) {
          this.swap(this.parentIndex(index), index);
          index = this.parentIndex(index);
      }
  }
  getNextIndex = (index) => {
      let leftIndex = this.leftIndex(index);
      if (this.heap[leftIndex] == null) return null;
      let rightIndex = this.rightIndex(index);
      if (this.heap[rightIndex] == null) return leftIndex;
      return this.comp(this.heap[leftIndex], this.heap[rightIndex]) < 0
          ? leftIndex
          : rightIndex;
  };
  heapifyDown() {
      let index = 0;
      let nextIndex = this.getNextIndex(index);

      while (
          nextIndex != null &&
          this.comp(this.heap[index], this.heap[nextIndex]) >= 0
      ) {
          this.swap(index, nextIndex);
          index = nextIndex;
          nextIndex = this.getNextIndex(nextIndex);
      }
  }
}
