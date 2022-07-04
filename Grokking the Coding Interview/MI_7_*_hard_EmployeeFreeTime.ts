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

const find_employee_free_time = function (schedule) {
  let busy = [];
  let minHeap = new Heap((x, y) => x.start - y.start);
  for (let i in schedule) {
    let { start, end } = schedule[i].shift();
    minHeap.push(new Interval(start, end, i));
  }
  let { start: minStart, end: maxEnd, index: lastIndex } = minHeap.pop();
  if (schedule[lastIndex].length > 0) {
    let { start, end } = schedule[lastIndex].shift();
    minHeap.push(new Interval(start, end, lastIndex));
  }
  while (minHeap.arr.length > 0) {
    let { start, end, index } = minHeap.pop();
    if (schedule[index].length > 0) {
      let { start, end } = schedule[index].shift();
      minHeap.push(new Interval(start, end, index));
    }
    if (maxEnd < start) {
      busy.push(new Interval(minStart, maxEnd));
      minStart = start;
      maxEnd = end;
      continue;
    }
    maxEnd = Math.max(maxEnd, end);
  }
  busy.push(new Interval(minStart, maxEnd));

  let free = [];
  let { end: busyEnd } = busy.shift();
  for (let { start, end } of busy) {
    if (start > busyEnd) {
      free.push(new Interval(busyEnd, start));
      busyEnd = end;
      continue;
    }
    busyEnd = Math.max(busyEnd, end);
  }

  return free;
}; // T:O(logK*N) S:(K)

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
