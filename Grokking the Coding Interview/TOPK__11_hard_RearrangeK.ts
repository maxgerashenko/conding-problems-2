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
  hashMapCount = {},
  maxHeap = new Heap((x, y) => y.count - x.count)
) {
  for (let s of str) {
    if (hashMapCount[s] == null) hashMapCount[s] = 0;
    hashMapCount[s]++;
  }
  for (key of Object.keys(hashMapCount))
    maxHeap.push({ key, count: hashMapCount[key] });
  let str2 = '';
  let tmp = null;
  while (maxHeap.arr.length > 0) {
    let { key, count } = maxHeap.pop();
    str2 += key;
    count--;
    if (count === 0) continue;
    if (tmp !== null) maxHeap.push(tmp);
    tmp = { key, count };
  }
  if (tmp.count === 1) str2 += tmp.key;

  return str2.length === str.length ? str2 : '';
}; // T:O(NlogN) S:O(N) // worse case every character is unique
