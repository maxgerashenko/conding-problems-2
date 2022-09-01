// https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
// Maximum CPU Load

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Brute force T:O(NlogN) S:(N)

const find_max_cpu_load = function (
  jobs,
  minHeap = new Heap((x, y) => x.end - y.end),
  maxLoad = 0
) {
  jobs.sort((x, y) => x.start - y.end);
  let { start, end, cpu_load } = jobs[0];
  maxLoad = cpu_load;
  for (let i = 1; i < jobs.length; i++) {
    let el = jobs[i];
    if (end < el.start) {
      start = el.start;
      end = Math.max(end, el.end);
      cpu_load = el.cpu_load;
      maxLoad = Math.max(maxLoad, cpu_load);
      continue;
    }
    end = Math.max(end, el.end);
    cpu_load += el.cpu_load;
    maxLoad = Math.max(maxLoad, cpu_load);
  }
  return maxLoad;
}; // T:O(NlogN) S:O(N);
