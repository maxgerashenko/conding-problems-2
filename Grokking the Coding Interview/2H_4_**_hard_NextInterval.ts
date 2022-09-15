// https://www.educative.io/courses/grokking-the-coding-interview/gkkmqXO6zrY
//
// Next Interval

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
    this.remove = (toDelete) =>
      (this.arr = this.arr.filter((el) => el !== toDelete));
  }
  get length() {
    return this.arr.length;
  }
  get value() {
    return this.arr[0];
  }
}

const find_next_interval = function (
  intervals,
  results = [],
  maxStartHeap = new Heap((x, y) => y.start - x.start),
  maxEndHeap = new Heap((x, y) => y.end - x.end)
) {
  for (let i = 0; i < intervals.length; i++) {
    let { start, end } = intervals[i];
    maxEndHeap.push({ index: i, end });
    maxStartHeap.push({ index: i, start });
  } // init heaps
  while (maxEndHeap.length) {
    let { end, index: endIndex } = maxEndHeap.pop();
    let { start, index: startIndex } = maxStartHeap.pop();
    while (maxStartHeap.length && maxStartHeap.value.start >= end) {
      let el = maxStartHeap.pop();
      start = el.start;
      startIndex = el.index;
      if (start === end) break;
    }
    if (start >= end) {
      results[endIndex] = startIndex;
      continue;
    }
    results[endIndex] = -1;
    maxStartHeap.push({ start, index: startIndex });
  }
  return results;
}; // T:O(NlogN+NlogN) S:O(N)
