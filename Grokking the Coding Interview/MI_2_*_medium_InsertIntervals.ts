// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function (
  intervals,
  { start: iStart, end: iEnd },
  i = 0,
  results = []
) {
  for (i; i < intervals.length; i++) {
    let { start, end } = intervals[i];
    if (end >= iStart) break;
    results.push(new Interval(start, end)); // before
  }
  for (i; i < intervals.length; i++) {
    let { start, end } = intervals[i];
    if (iEnd < start) break;
    iEnd = Math.max(iEnd, end);
  } // merged
  results.push(new Interval(iStart, iEnd)); // insert merged
  return [...results, ...intervals.slice(i)]; // rest
}; // T:O(N) S:O(N)
