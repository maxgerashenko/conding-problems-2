// https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE
//
// Rearrange String K Distance Apart

// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const reorganize_string = function (
  str,
  k,
  result = '',
  hashMapCount = {},
  maxHeap = new Heap((x, y) => y.count - x.count)
) {
  for (let key of str)
    hashMapCount[key] = !!hashMapCount[key] ? hashMapCount[key] + 1 : 1;
  for (let key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] });
  while (maxHeap.arr.length > 0) {
    let queue = [];
    let used = -1;
    while (maxHeap.arr.length > 0) {
      let { key, count } = maxHeap.pop();
      result += key;
      count--;
      used + 1;
      if (count > 0) queue.push({ key, count });
    }
    if (result.length >= k - 1 - used) for (let el of queue) maxHeap.push(el);
  }
  return result.length === str.length ? result : '';
}; // T:O(NlogN) S:O(N)
