// Merge Intervals
// https://leetcode.com/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let res = [];
  let start = Number.MAX_SAFE_INTEGER,
    end = null;
  for (let i = 0; i < intervals.length; i++) {
    if (end != null && end < intervals[i][0]) {
      res.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
      continue;
    }
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
  }
  if (start != null) res.push([start, end]);
  return res;
} // T:O(n) S:O(n)
