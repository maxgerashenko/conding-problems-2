// Insert Interval
// https://leetcode.com/problems/insert-interval/description/

// O(n)
// 1) old end < new start, just add
// 2) udpate start and end
// 3) add rest
// 4) add [start, end] if is already end

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];
  let [start, end] = newInterval;
  const res = [];
  let i = 0;
  for (; i < intervals.length; i++) {
    if (intervals[i][1] < start) {
      res.push(intervals[i]);
      continue;
    }
    if (start >= intervals[i][0] || end >= intervals[i][0]) {
      start = Math.min(start, intervals[i][0]);
      end = Math.max(end, intervals[i][1]);
      continue;
    }
    if (end < intervals[i][0]) {
      res.push([start, end]);
      break;
    }
  }
  if (i === intervals.length) res.push([start, end]);
  res.push(...intervals.slice(i));

  return res;
} // T:O(N) S:O(1)
