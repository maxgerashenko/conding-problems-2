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
  results = [],
  minHeap = new Heap((x, y) => x.end - y.end)
) {
  for (let i = 0; i < schedule.length; i++)
    minHeap.push({ ...schedule[i].shift(), i }); // init heap
  let { end, i } = minHeap.pop();
  while (minHeap.arr.length || schedule[i].length) {
    if (schedule[i].length) minHeap.push({ ...schedule[i].shift(), i });
    let el = minHeap.pop();
    if (end < el.start) {
      results.push(new Interval(end, el.start));
      end = Math.max(end, el.end);
      continue;
    }
    i = el.i;
    end = Math.max(end, el.end);
  }
  return results;
}; // T:O(NlogK) S:O(K)
