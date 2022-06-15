// https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
// Maximum CPU Load

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

class minHeap {
  constructor() {
    this.array = [];
  }
  getLast() {
    return this.array[0];
  }
  removeLast() {
    this.array.shift();
  }
  add(job) {
    this.array.push(job);
    this.array.sort((x, y) => x.end - y.end);
  }
}

const find_max_cpu_load = function(jobs) {
  // Max CPU in the same time
  //
  // conner case
  // sort array by start
  // iterate jobs
  // remove cpu if start > minEnd time
  // update max CPU
  // returm max CPU

  // conner case
  if (jobs.length === 0) return 0;
  if (jobs.length === 1) return jobs[0].cpu_load;

  // sort array by start
  jobs.sort((x, y) => x.start - y.start);

  // iterate array
  let cpuCountMax = 0;
  let cpuCount = 0;
  let heap = new minHeap();
  for (let job of jobs) {
    // remove past jobs
    let lastJob = heap.getLast();
    while (lastJob && lastJob.end <= job.start) {
      // iterate
      cpuCount -= lastJob.cpu_load;
      heap.removeLast();
      lastJob = heap.getLast();
    }

    // add jobs
    heap.add(job);
    cpuCount += job.cpu_load;
    cpuCountMax = Math.max(cpuCountMax, cpuCount);
  }

  // return max cpu count
  return cpuCountMax;
}; // T:O(NlogN + NlogN + N) S:O(N+N) sortring + inserting to the priority queque
