// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
// Merge Intervals

const merge = function (intervals) {
  intervals.sort(({ start: startX }, { start: startY }) => startX - startY);
  let merged = [];
  let { start: min, end: max } = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let { start, end } = intervals[i];
    if (start > max) {
      merged.push(new Interval(min, max));
      min = start;
      max = end;
      continue;
    }
    max = Math.max(max, end);
  }
  merged.push(new Interval(min, max));
  return merged;
}; // T:O(NlogN + N) S:O(N)
