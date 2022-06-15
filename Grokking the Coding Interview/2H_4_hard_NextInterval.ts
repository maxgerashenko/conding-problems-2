// https://www.educative.io/courses/grokking-the-coding-interview/gkkmqXO6zrY
//
// Next Interval

const find_next_interval = function (intervals) {
  // init intervals;
  let maxEnd = new Heap(true);
  let maxStart = new Heap(true);
  for (let index = 0; index < intervals.length; index++) {
    maxEnd.push({ index, value: intervals[index].end });
    maxStart.push({ index, value: intervals[index].start });
  } // T: O(N log N)

  // find next
  let result = [];
  while (maxEnd.length() > 0) {
    let end = maxEnd.pop();

    let start = null;
    while (maxStart.length() > 0 && maxStart.element().value >= end.value) {
      start = maxStart.pop();
    }

    result[end.index] = start ? start.index : -1;
  } // T: O(N log N)

  return result;
}; // T: O(N log N) S: O(N)
