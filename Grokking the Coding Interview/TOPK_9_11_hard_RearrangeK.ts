// https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE
//
// Rearrange String K Distance Apart (hard)

const reorganize_string = function (str, k) {
  // catch error
  if (k === 0 || str.length === 0) return str; // conner case
  const map = getHashMapCount(str.split(''));
  const max = getMaxHeapCount(map);
  const result = [];
  const queue = [];
  while (max.arr.length > 0) {
    let { char, count } = max.pop();
    result.push(char);
    queue.unshift({ char, count: count - 1 });
    if (queue.length === k) {
      const { char, count } = queue.pop();
      if (count > 0) max.push({ char, count });
    }
  }
  return str.length === result.length ? result.join('') : -1;
}; // T:(NlogN) S(N)

function getHashMapCount(arr) {
  const map = {};
  for (let el of arr) {
    map[el] = map[el] ? map[el] + 1 : 1;
  }
  return map;
}

function getMaxHeapCount(map) {
  const max = new Heap((a, b) => b.count - a.count);
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
