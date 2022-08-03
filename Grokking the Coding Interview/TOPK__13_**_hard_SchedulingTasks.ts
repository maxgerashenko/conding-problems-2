// https://www.educative.io/courses/grokking-the-coding-interview/JYB20zgR32o
//
// Scheduling Tasks

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const schedule_tasks = function (
  tasks,
  k,
  result = '',
  hashMapCount = {},
  maxHeap = new Heap((x, y) => y.count - x.count)
) {
  for (let task of tasks)
    hashMapCount[task] = !!hashMapCount[task] ? hashMapCount[task] + 1 : 1; // init hashMapCount
  for (let key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] }); // init max Heap
  while (maxHeap.arr.length) {
    let queue = [];
    let used = -1;
    while (maxHeap.arr.length) {
      let { key, count } = maxHeap.pop();
      count--;
      result += key;
      used++;
      if (count > 0) queue.push({ key, count });
    }
    if (queue.length > 0) {
      if (k - used > 0) result += ' '.repeat(k - used);
      for (let { count, key } of queue)
        count > 0 && maxHeap.push({ key, count });
    }
  }
  return result.length;
}; // T:O(NlogN) S:O(N)
