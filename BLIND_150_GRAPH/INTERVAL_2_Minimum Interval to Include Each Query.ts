// https://leetcode.com/problems/minimum-interval-to-include-each-query/description/
//
// Minimum Interval to Include Each Query

// sort intervals by start
// sort queries
// add to Heap by start
// remove by End
// get the shortest
// return original order
// don't use shift();
function minInterval(intervals: number[][], queries: number[]): number[] {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]).reverse();
  let queriesIndexed = queries
    .map((el, index) => [el, index])
    .sort((a, b) => a[0] - b[0]);
  let minHeap = new Heap((a, b) => a[1] - a[0] + 1 - (b[1] - b[0] + 1));

  for (let [query, index] of queriesIndexed) {
    while (
      intervals.length > 0 &&
      intervals[intervals.length - 1][0] <= query
    ) {
      minHeap.add(intervals.pop());
    }

    while (minHeap.heap.length > 0 && minHeap.peek()[1] < query) {
      minHeap.remove();
    }

    let shortest = minHeap.peek();
    res[index] = shortest != null ? shortest[1] - shortest[0] + 1 : -1;
  }

  return res;
} // ST:O(NlogN + QLogQ) S:O(n + m)
