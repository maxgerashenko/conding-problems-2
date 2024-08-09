// Merge Intervals
//
// https://leetcode.com/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  let [preStart, preEnd] = intervals[0];
  for (let [start, end] of intervals) {
    if (preEnd < start) {
      result.push([preStart, preEnd]);
      preStart = start;
      preEnd = end;
    }

    preStart = Math.min(preStart, start);
    preEnd = Math.max(preEnd, end);
  }
  result.push([preStart, preEnd]);

  return result;
} // T:O(NlogN) S:O(1)
