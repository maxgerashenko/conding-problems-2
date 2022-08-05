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
  for (let val of str)
    hashMapCount[val] = hashMapCount[val] == null ? 1 : hashMapCount[val] + 1; // init hashMapCount
  for (let key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] });
  while (maxHeap.arr.length > 0) {
    let gapCount = k - 2;
    let queue = [];
    while (maxHeap.arr.length > 0) {
      let { key, count } = maxHeap.pop();
      count--;
      result += key;
      (count > 0 && queue.push({ key, count })) || gapCount--;
    }
    if (queue.length === 0) break;
    if (gapCount > 0) return '';
    for (let el of queue) maxHeap.push(el);
  }
  return result;
}; // T:O(NlogN) S:O(N)
