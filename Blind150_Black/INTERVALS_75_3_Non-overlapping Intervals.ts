// https://leetcode.com/problems/non-overlapping-intervals/description/
// Non-overlapping Intervals

// use intervals
// conner case [] return []
// use preEnd
// use count
// when no overlap update preEnd and continue
// otherwice use min(preEnd, end) in case interval covers a lot of intervals
// select the snallest interval to cover the smallest one
// and increment the count
// return count

function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0; // conner case
  let count = 0;
  intervals.sort(([aStart], [bStart]) => aStart - bStart);

  let [, preEnd] = intervals.shift();
  for (let [start, end] of intervals) {
    if (preEnd <= start) {
      preEnd = end;
      continue;
    }
    preEnd = Math.min(preEnd, end); // interval could be bigger than current
    count++;
  }

  return count;
} // T:O(nlogn) S:O(n)
