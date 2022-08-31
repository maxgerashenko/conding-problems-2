// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
//
// Merge Intervals

const merge = function (intervals, results = []) {
  intervals.sort((x, y) => x.start - y.start); // sort by start
  let { start, end } = intervals.shift(); // take first
  while (intervals.length) {
    let el = intervals.shift();
    if (end < el.start) {
      results.push(new Interval(start, end));
      start = el.start;
      end = el.end;
      continue;
    }
    end = Math.max(end, el.end);
  }
  return [...results, new Interval(start, end)]; // and the last
}; // T:O(NLOG N) S:O(N)
