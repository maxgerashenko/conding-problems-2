// Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/description/

// Sort by start T:O(NlogN) S:O(1)
// if overlap
// count
// remove the shortest end
// It is greedy

function eraseOverlapIntervals(intervals: number[][]): number {
  let count = 0;
  let start = -1,
    end = -1;
  intervals.sort((a, b) => a[0] - b[0]); // sort O(nlogn)

  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i];
    if (a < end && b > start) {
      count++;
      if (end < b) continue;
    }
    start = a;
    end = b;
  }
  return count;
} // T:O(NlogN) S:O(1)
