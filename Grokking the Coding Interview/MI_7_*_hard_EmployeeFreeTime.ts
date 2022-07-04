// https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0
// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }
  add(el) {
    this.arr.push(el);
    this.arr.sort(this.sort);
  }
  pop() {
    return this.arr.shift();
  }
}

const find_employee_free_time = function (schedule) {
  const result = [];
  let minHeap = new Heap((x, y) => x.start - y.start);
  for (let i in schedule) {
    let { start, end } = schedule[i].shift();
    minHeap.add(new Interval(start, end, +i));
  }
  let pre = minHeap.pop();
  const update = (owner) => {
    let { start, end } = schedule[owner].shift();
    minHeap.add(new Interval(start, end, owner));
  };
  while (minHeap.arr.length) {
    let cur = minHeap.pop();

    if (schedule[cur.owner].length) update(cur.owner);
    if (pre.end < cur.start) {
      result.push(new Interval(pre.end, cur.start));
    }
    if (schedule[pre.owner].length) update(pre.owner);
    pre = cur;
  }
  return result;
}; // T:O(N) S:O(N)

// with sort
const find_max_cpu_load = function (jobs) {
  jobs.sort((x, y) => x.start - y.start);
  let { start: minStart, end: maxEnd, cpu_load: load } = jobs[0];
  let maxLoad = load;
  for (let i = 1; i < jobs.length; i++) {
    let { start, end, cpu_load } = jobs[i];
    if (start > maxEnd) {
      maxLoad = Math.max(maxLoad, load);
      load = cpu_load;
      minStart = start;
      maxEnd = end;
      continue;
    }
    load += cpu_load;
    maxEnd = Math.max(maxEnd, end);
  }
  return Math.max(maxLoad, load);
}; // T:O(NlogN) S:O(N)
