// https://www.educative.io/courses/grokking-the-coding-interview/xV7wx4o8ymB
//
// Rearrange String

const rearrange_string = function (str) {
  // catch error
  // conner case
  let mapCount = getMapCount(str.split(''));
  const max = getMaxHeapCount(mapCount);
  const result = [];
  let tmp = null;
  while (max.arr.length > 0) {
    let { num, count } = max.pop();
    if (tmp) max.push(tmp);
    result.push(num);
    count--;
    tmp = count > 0 ? { num, count } : null;
  }

  return result.length === str.length ? result.join('') : -1;
}; // T:O(NlogN + NlogN) S:O(N)

function getMaxHeapCount(mapCount) {
  let max = new Heap(true);
  let distinct = Object.keys(mapCount);
  for (let num of distinct) {
    const count = mapCount[num];
    max.push({ num, count });
  }
  return max;
}

function getMapCount(arr) {
  const map = {};
  for (let el of arr) {
    map[el] = map[el] ? map[el] + 1 : 1;
  }
  return map;
}

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax
      ? (a, b) => b.count - a.count
      : (a, b) => a.count - b.count;
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
