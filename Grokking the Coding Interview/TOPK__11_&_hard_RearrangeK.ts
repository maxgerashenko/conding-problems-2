// https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE
//
// Rearrange String K Distance Apart (hard)
// & pre != cur with frequency is arr.lenght == 0 and tmp = null or original.len = new.len

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const rearrange_string = function (
  str,
  newString = '',
  hashMapCount = {},
  maxHeap = new Heap((x, y) => y.count - x.count)
) {
  for (let s of str) {
    if (hashMapCount[s] == null) hashMapCount[s] = 0;
    hashMapCount[s]++;
  } // init hashmap
  for (let key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] });
  let tmp = null;
  while (maxHeap.arr.length > 0) {
    let { key, count } = maxHeap.pop();
    tmp && tmp.count > 0 && maxHeap.push({ ...tmp });
    newString += key;
    count--;
    tmp = { key, count };
  }
  return newString.length == str.length ? newString : '';
}; // T:O(NlogN) S:O(N)
