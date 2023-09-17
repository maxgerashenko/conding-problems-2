// https://leetcode.com/problems/task-scheduler/description/
// Task Scheduler

// use hashmap count
// use maxHeap
// use queueu
// use count
// while queue or heap
// return count
// idle count - index > n
// T:O(klogk) S:O(n+k)

function leastInterval(tasks: string[], n: number): number {
  let maxHeap = new Heap((a, b) => b.val - a.val);
  const hashMapCount = {};
  let count = 0;

  // init count
  for (let task of tasks) {
    if (hashMapCount[task] == null) {
      hashMapCount[task] = 0;
    }
    hashMapCount[task]++;
  }

  // init heap
  for (let [key, val] of Object.entries(hashMapCount)) {
    maxHeap.add({ key, val });
  }

  let queue = [];
  while (maxHeap.heap.length > 0 || queue.length) {
    if (queue.length > 0 && count - queue[0][0] > n) {
      maxHeap.add(queue.shift()[1]);
    }

    if (maxHeap.heap.length > 0) {
      let { key, val } = maxHeap.remove();
      if (val > 1) {
        val--;
        queue.push([count, { key, val }]);
      }
    }
    count++;
  }

  return count;
} // T:O(KlogK) S:O(N+K)
