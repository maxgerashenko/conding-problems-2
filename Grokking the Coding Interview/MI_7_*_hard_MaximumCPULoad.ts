// https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
// Maximum CPU Load

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Brute force T:O(NlogN) S:(N)

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
  }
  add(el) {
    this.arr.push(el);
    this.arr.sort((x, y) => this.sort);
  }
  remove() {
    return this.arr.pop();
  }
  getEl() {
    return this.arr[0];
  }
  getLength() {
    return this.arr.length();
  }
  getTotalLoad() {
    return this.arr.reduce((res, cur) => res + cur.cpu_load, 0);
  }
}

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
