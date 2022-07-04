// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function (intervals, new_interval) {
  let merged = [];
  let { start: newStart, end: newEnd } = new_interval;
  let i = 0;
  while (i < intervals.length && intervals[i].end < newStart) {
    merged.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i].start < newEnd) {
    newStart = Math.min(newStart, intervals[i].start);
    newEnd = Math.max(newEnd, intervals[i].end);
    i++;
  }
  merged.push(new Interval(newStart, newEnd));

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}; // T:O(N) S:(N + K)
