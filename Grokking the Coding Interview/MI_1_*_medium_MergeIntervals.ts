// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
//
// Merge Intervals

const merge = function (intervals, results = []) {
  intervals.sort((x, y) => x.start - y.start);
  let { start, end } = intervals.shift();
  while (intervals.length > 0) {
    let el = intervals.shift();
    if (end < el.start) {
      results.push(new Interval(start, end));
      start = el.start;
      end = el.end;
      continue;
    }
    start = Math.min(start, el.start);
    end = Math.max(end, el.end);
  }
  results.push(new Interval(start, end));
  return results;
}; // T:O(NlogN+N) S:O(N) Space of sort is N
