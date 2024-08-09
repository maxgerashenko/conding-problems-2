// Insert Interval
//
// https://leetcode.com/problems/insert-interval/description/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let len = intervals.length;
  let result = [];
  let [newStart, newEnd] = newInterval;

  if (len === 0) return [newInterval]; // conner case

  let index;
  for (index = 0; index < len; index++) {
    let range = intervals[index];

    if (range[1] < newStart) {
      result.push(range);
      continue;
    } // ignore in the begining

    if (newEnd < range[0]) break; // acknowledge that it ends before the insert

    newStart = Math.min(newStart, range[0]);
    newEnd = Math.max(newEnd, range[1]);
  }

  return [...result, [newStart, newEnd], ...intervals.slice(index)]; // acknowledge
} // T:O(N) S:O(1)
