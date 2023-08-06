// https://leetcode.com/problems/minimum-interval-to-include-each-query/
// Minimum Interval to Include Each Query

// Intervals
// use cache
// use minHeap
// sort both arrays,
// use copy + Set + HashMap to store queries
// sort intervals by start
// 1st add by start < index , remember index for next time
// 2nd remove index < end
// use minHeap by size, after start is filter add to heap[end-start+1, end]
// store value in dp[index]
// return original order of queries as queries.max(el => dp[el])
// T:O(nlogn + klogK) S:O(n)

function minInterval(intervals: number[][], queries: number[]): number[] {
  let dp = []; // cache
  let minHeap = new Heap((a, b) => a[0] - b[0]); // sort by start
  let index = 0; // start index
  let n = intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);
  let copy = [...queries].sort((a, b) => a - b); // copy

  for (let el of new Set(copy)) {
    while (index < n) {
      let [start, end] = intervals[index];
      if (el < start) break;
      minHeap.add([end - start + 1, end]);
      index++;
    } // add

    while (minHeap.heap.length > 0 && minHeap.peek()[1] < el) {
      minHeap.remove();
    } // clean up

    dp[el] = (minHeap.peek() && minHeap.peek()[0]) || -1;
  }

  return queries.map((el) => dp[el]);
} // T:O(nlogn+klogk) S:O(n)
