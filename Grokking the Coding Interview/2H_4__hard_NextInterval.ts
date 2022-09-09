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
}
const find_next_interval = function (
  intervals,
  results = [],
  maxEnd = new Heap((x, y) => y.end - x.end),
  maxStart = new Heap((x, y) => y.start - x.start)
) {
  for (let i = 0; i < intervals.length; i++) {
    let { start, end } = intervals[i];
    maxEnd.push({ iMaxEnd: i, end });
    maxStart.push({ iMaxStart: i, start });
  } // init
  while (maxEnd.arr.length) {
    let { end, iMaxEnd } = maxEnd.pop();
    if (maxStart.arr.length === 0) break;
    let { start, iMaxStart } = maxStart.pop();
    while (maxStart.arr.length > 0 && maxStart.arr[0].start >= end) {
      let el = maxStart.pop();
      start = el.start;
      iMaxStart = el.iMaxStart;
    }
    maxStart.push({ start, iMaxStart });
    console.log(start, end);
    results[iMaxEnd] = start >= end ? [iMaxStart] : -1;
  }
  return results;
}; // T:O(NlogN) S:O(N)
