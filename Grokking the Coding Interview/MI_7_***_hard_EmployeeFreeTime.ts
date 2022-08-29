// https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0
// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort(this.sort);
  }
  pop() {
    return this.arr.shift();
  }
}
const find_employee_free_time = function (
  schedule,
  free = [],
  minHeap = new Heap((x, y) => x.end - y.end)
) {
  for (let i in schedule) minHeap.push({ ...schedule[i].shift(), i });
  let { end, i } = minHeap.pop();
  while (minHeap.arr.length || schedule[i].length) {
    if (schedule[i].length > 0) minHeap.push({ ...schedule[i].shift(), i });
    let meeting = minHeap.pop();
    i = meeting.i;
    if (end < meeting.start) {
      free.push(new Interval(end, meeting.start));
    }
    end = Math.max(end, meeting.end);
  }
  return free;
}; // T:O(logK*N) S:(K)
