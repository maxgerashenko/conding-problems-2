// https://leetcode.com/problems/minimum-interval-to-include-each-query/
// Minimum Interval to Include Each Query

// use Greedy
// use MinHeap
// use hashMap for result index
// sort intervals
// sort queries
// sort result with minHeap
// count range size for minHeap
// original index could have 2 elements wtih
//
// T:O(NLogN + QlogQ)

function minInterval(intervals: number[][], queries: number[]): number[] {
  intervals.sort(([startA], [startB]) => startA - startB);
  let hashMapIndexArr = {};
  for (let i in queries) {
    let query = queries[i];
    if (hashMapIndexArr[query] == null) {
      hashMapIndexArr[query] = [];
    }
    hashMapIndexArr[query].push(Number(i));
  }
  queries.sort((a, b) => a - b);
  const minHeap = new Heap(([sizeA], [sizeB]) => sizeA - sizeB);
  const res = [];

  for (let query of queries) {
    for (let [start, end] of intervals) {
      if (query < start) break;
      minHeap.add([end - start + 1, end]);
    } // add inbounce

    while (minHeap.heap.length && minHeap.peek()[1] < query) {
      minHeap.remove();
    } // clean outbounce

    let indexes = hashMapIndexArr[query];
    let size = minHeap.heap.length ? minHeap.peek()[0] : -1;
    for (let index of indexes) {
      res[index] = size;
    }
  }

  return res;
} // T:O(qlogq + nlogn)
