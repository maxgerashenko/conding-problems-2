// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function (intervals, { start, end }, results = [], i) {
  for (i = 0; i < intervals.length; i++) {
    let el = intervals[i];
    if (el.end < start) {
      results.push(el);
      continue;
    } // before
    if (el.start <= end) {
      start = Math.min(start, el.start);
      end = Math.max(end, el.end);
      continue;
    } // merge
    if (end < el.start) break;
  }
  results.push(new Interval(start, end)); // add
  results.push(...intervals.slice(i)); // after
  return results;
}; // T:O(N) S:O(N)
