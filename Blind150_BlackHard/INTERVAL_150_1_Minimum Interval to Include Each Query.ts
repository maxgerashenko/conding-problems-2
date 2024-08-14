// Minimum Interval to Include Each Query
//
// https://leetcode.com/problems/minimum-interval-to-include-each-query/description/

// sort intervals
// sort queries
// add to heap by start
// remove from heap by end
// map queries to cache
function minInterval(intervals: number[][], queries: number[]): number[] {
  let qLen = queries.length;
  let intLen = intervals.length;
  const cache = {};
  let minHeap = new Heap<El>((a, b) => a.val - b.val);

  intervals.sort((a, b) => a[0] - b[0]); // sort by start
  const queriesSorted = [...queries].sort((a, b) => a - b); // sort copy

  let intervalIdx = 0;
  for (let query of queriesSorted) {
    if (query in cache) continue;

    while (
      intervalIdx < intervals.length &&
      intervals[intervalIdx][0] <= query
    ) {
      let [start, end] = intervals[intervalIdx];
      minHeap.add({ val: end - start + 1, end });
      intervalIdx++;
    }

    // Remove intervals from heap that no longer cover the current query
    while (minHeap.heap.length > 0 && minHeap.peek().end < query)
      minHeap.remove();

    cache[query] = minHeap.peek()?.val ?? -1;
  }

  return queries.map((el) => cache[el]); // map to orinal order
} // T:O(NlogN + MlogM)
