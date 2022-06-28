// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function (intervals, new_interval) {
  let { start: min, end: max } = new_interval;
  let merged = [];

  for (let interval of intervals) {
    let { start, end } = interval;
    if (end < min) {
      merged.push(interval);
      continue;
    }
    if (start > max) {
      merged.push(new Interval(min, max));
      min = null;
      max = null;
      merged.push(interval);
      continue;
    }
    min = Math.min(min, start);
    max = Math.max(max, end);
  }

  if (min && max) merged.push(new Interval(min, max));

  return merged;
}; // T:O(N) S:O(N)
