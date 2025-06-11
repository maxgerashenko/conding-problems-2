// https://leetcode.com/problems/task-scheduler/submissions/
// Task Scheduler

// Use MaxHeap, hasmapCount, queue
// Group symbols by count wiht hashMapCount
// Maxheap is stratigic to use most frequent to get min idle time
// Use queue to find most last recent processed
// Have a counter
// use while until Heap or Queue is not empty
// Return count
// T:O(M*NLog(26)), M is Idle time, worse case when the same symbol
// T:O(M*N) S:(26)

function leastInterval(tasks: string[], n: number): number {
  let hashMapCount = {};
  let maxHeap = new Heap((a, b) => b.count - a.count);
  let queue = [];

  for (let el of tasks) {
    if (hashMapCount[el] == null) {
      hashMapCount[el] = 0;
    }
    hashMapCount[el]++;
  }

  for (let key of Object.keys(hashMapCount)) {
    maxHeap.add({ key, count: hashMapCount[key] });
  }

  let counter = 0;
  while (maxHeap.heap.length || queue.length) {
    counter++;
    if (queue.length > 0 && queue.slice(-1)[0].counter <= counter) {
      let { key, count } = queue.pop();
      maxHeap.add({ key, count });
    }
    if (maxHeap.heap.length === 0) {
      continue;
    }
    let { key, count } = maxHeap.remove();
    count--;
    if (count === 0) continue;
    queue.unshift({ key, count, counter: counter + n + 1 });
  }
  return counter;
}
