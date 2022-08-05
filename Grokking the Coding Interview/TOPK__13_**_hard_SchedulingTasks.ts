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
    this.length = () => this.arr.length;
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
    hashMapCount[task] =
      hashMapCount[task] == null ? 1 : hashMapCount[task] + 1; // init hashMap
  for (let key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] }); // init maxHeap
  while (maxHeap.arr.length > 0) {
    let queue = [];
    let gapCount = k + 1; // 1 char itself
    while (maxHeap.arr.length > 0) {
      let { key, count } = maxHeap.pop();
      count--;
      result += key;
      (count > 0 && queue.push({ key, count })) || gapCount--;
    }
    if (queue.length === 0) break;
    result += ' '.repeat(
      gapCount - queue.length < 0 ? 0 : gapCount - queue.length
    );
    for (let task of queue) maxHeap.push(task);
  }
  return result.length;
}; // T:O(NlogN) S:O(N)
