// https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
// Maximum CPU Load

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Brute force T:O(NlogN) S:(N)

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

const find_max_cpu_load = function (jobs) {
  let minHeap = new Heap((x, y) => x.start - y.start);
  for (let job of jobs) {
    minHeap.push(job);
  }
  let { start: minStart, end: maxEnd, cpu_load: load } = minHeap.pop();
  let maxLoad = load;
  while (minHeap.arr.length > 0) {
    let { start, end, cpu_load } = minHeap.pop();
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
}; // T:O(logN) S:O(N)

const find_max_cpu_load = function (jobs) {
  jobs.sort((x, y) => x.start - y.start);
  let maxLoad = 0;
  let minHeap = new Heap((x, y) => x.end - y.end);
  for (let job of jobs) {
    while (minHeap.getEl() && minHeap.getEl().end <= job.start) {
      minHeap.remove();
    }
    minHeap.add(job);
    maxLoad = Math.max(maxLoad, minHeap.getTotalLoad());
  }
  return maxLoad;
}; // T:O(NlonN) S:O(1)
