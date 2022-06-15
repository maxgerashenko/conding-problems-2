// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
// Merge Intervals
//
const merge = function(intervals) {
  // Merge overlaped intervals

  // Sort intervals by start
  // iterate interval
  // if t.e < i.s, add interal
  // otherwise update start update end
  // return overlaps

  // conner case
  if (intervals.length < 2) return intervals;

  // sort by start
  intervals.sort((x, y) => x.start - y.start);

  // iterate and merge
  let overlaps = [];
  let { start, end } = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let { start: newStart, end: newEnd } = intervals[i];

    // base case
    if (end < newStart) {
      overlaps.push(new Interval(start, end));
      start = newStart;
      end = newEnd;
      continue;
    }

    // iterate
    end = Math.max(end, newEnd);
  }

  // add the last one
  overlaps.push(new Interval(start, end));

  return overlaps;
}; // O(nlogn + n) S:O(1)
