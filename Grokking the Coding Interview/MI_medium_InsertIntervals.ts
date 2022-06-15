// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function(intervals, new_interval) {
  // Insert and merge interval

  // find start
  // merge interval
  // find end
  // insert
  // add rest
  // return merged intervals

  // conner case
  if (intervals.length === 0) return [new_interval];

  const merged = [];
  let { start, end } = new_interval;
  let i = 0;
  // find the start
  while (i < intervals.length && intervals[i].end < start) {
    merged.push(intervals[i]);
    i++;
  }

  // update start
  start = Math.min(start, intervals[i].start);

  // merge
  while (i < intervals.length && intervals[i].start <= end) {
    end = Math.max(end, intervals[i].end);
    i++;
  }

  // insert merged
  merged.push(new Interval(start, end));

  // add the rest
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}; // T:O(N+N+N) S:(1)
