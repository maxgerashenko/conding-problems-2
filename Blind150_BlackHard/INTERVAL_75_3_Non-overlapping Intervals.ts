// Non-overlapping Intervals.ts
//
// https://leetcode.com/problems/non-overlapping-intervals/description/

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let [, preEnd] = intervals.shift();
  let count = 0;
  for (let [start, end] of intervals) {
    if (preEnd > start) {
      count++;
      continue;
    }
    preEnd = end;
  }

  return count;
} // T:O(nlogN) S:O(1)

function eraseOverlapIntervals2(intervals: number[][]): number {
  if (intervals.length === 0) return 0;
  let count = 0;
  intervals.sort(([aStart], [bStart]) => aStart - bStart);

  let [, preEnd] = intervals.shift();
  for (let [start, end] of intervals) {
    if (preEnd <= start) {
      preEnd = end; // remove/ignore
      continue;
    }
    preEnd = Math.min(preEnd, end); // shortest first
    count++;
  }

  return count;
} // T:O(nlog) S:O(n)
