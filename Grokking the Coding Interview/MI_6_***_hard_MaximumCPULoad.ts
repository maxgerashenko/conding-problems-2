// https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
// Maximum CPU Load

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Brute force T:O(NlogN) S:(N)

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
    this.arr.sort(this.sort);
  }
  pop() {
    return this.arr.shift();
  }
}
const find_max_cpu_load = function (
  jobs,
  minHeap = new Heap((x, y) => x.end - y.end),
  maxLoad = 0,
  load = 0
) {
  jobs.sort((x, y) => x.start - y.start);
  for (let job of jobs) {
    while (minHeap.arr.length) {
      if (minHeap.arr[0].end > job.start) break;
      let { cpu_load } = minHeap.pop();
      load -= cpu_load;
    }
    minHeap.push(job);
    load += job.cpu_load;
    maxLoad = Math.max(maxLoad, load);
  }
  return maxLoad;
}; // T:O(NlogN+N)  S:O(N)
