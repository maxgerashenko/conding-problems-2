// https://leetcode.com/problems/merge-intervals/description/
// Merge Intervals

// merge intervals
// shift first element
// use preStart, preEnd
// iterate array
// if not overlap preEnd < start
// then push to res and update preStart, preEnd
// if overlap just update preStart = min(preStart, start); preEnd= max(preEnd)
// at the end add current preStart preEnd
//
// T:O(nlogn) S:O(n)

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  if (intervals.length === 0) return [];
  let res = [];

  let [preStart, preEnd] = intervals.shift();
  for (let [start, end] of intervals) {
    if (preEnd < start) {
      res.push([preStart, preEnd]);
      preStart = start;
      preEnd = end;
      continue;
    }
    preStart = Math.min(preStart, start);
    preEnd = Math.max(preEnd, end);
  }
  res.push([preStart, preEnd]);

  return res;
} // T:O(nlogn) S:O(n)
