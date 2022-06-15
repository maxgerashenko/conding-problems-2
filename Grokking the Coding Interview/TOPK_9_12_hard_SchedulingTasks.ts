// https://www.educative.io/courses/grokking-the-coding-interview/JYB20zgR32o
//
// Scheduling Tasks

const schedule_tasks = function (tasks, k) {
  // catch error
  // conner case
  const result = [];
  const map = getHashMapCount(tasks);
  const max = getMaxHeapCount(map);
  while (max.arr.length > 0) {
    let queue = [];
    while (max.arr.length > 0) {
      let { char, count } = max.pop();
      result.push(char);
      queue.unshift({ char, count: count - 1 });
      if (queue.count === k + 1) {
        let { char, count } = queue.pop();
        if (count > 0) max.push({ char, count });
      }
    }
    queue = queue.filter(({ count }) => count > 0);
    if (queue.length === 0) break;
    result.push(...Array(k - queue.length).fill('-'));
    for (el of queue) max.push(el);
  }
  return result.length;
}; // T:O(NlogN) T:O(N)

function getHashMapCount(arr) {
  let map = {};
  for (let char of arr) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  return map;
}

function getMaxHeapCount(map) {
  let max = new Heap((a, b) => b.count - a.count);
  for (let char of Object.keys(map)) max.push({ char, count: map[char] });
  return max;
}

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
    let tmp = this.arr.shift();
    this.arr.sort(this.sort);
    return tmp;
  }
}
