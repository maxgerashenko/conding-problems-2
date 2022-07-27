// https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY
//
// Maximum Distinct Elements
// & use minHeap for k els, use min for removal, at last k could be not enogth to make it distinct

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_maximum_distinct_elements = function (
  nums,
  k,
  hashMapCount = {},
  maxHeap = new Heap((x, y) => y.count - x.count),
  minHeap = new Heap((x, y) => x.count - y.count)
) {
  for (let num of nums) {
    if (hashMapCount[num] == null) hashMapCount[num] = 0;
    hashMapCount[num]++;
  } // init hashMapCount
  let keys = Object.keys(hashMapCount).filter((key) => hashMapCount[key] > 1);
  let distinctLegth = Object.keys(hashMapCount).length - keys.length;
  let len = Math.min(k, keys.length); // arr could shorter than k
  for (let i = 0; i < len; i++) {
    let key = keys.shift();
    maxHeap.push({ key, count: hashMapCount[key] });
  } // init maxHeap
  for (let key of keys) {
    if (hashMapCount[key] > maxHeap.arr[0].count) continue;
    maxHeap.push({ key, count: hashMapCount[key] });
    maxHeap.pop();
  } // get k min of max
  while (maxHeap.arr.length > 0) minHeap.push(maxHeap.pop()); // init min
  while (k > 0 && minHeap.arr.length > 0) {
    let { count } = minHeap.pop();
    k -= count - 1;
    if (k >= 0) distinctLegth++;
  }
  if (k > 0) distinctLegth -= k;
  return distinctLegth;
}; // T:O(NLogK) S:O(D||K);
