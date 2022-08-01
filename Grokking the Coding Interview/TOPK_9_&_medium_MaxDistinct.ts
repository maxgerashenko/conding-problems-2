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
  distinctCount = 0,
  hasMapCout = {},
  minHeap = new Heap((x, y) => x.count - y.count)
) {
  if (nums.length <= k) return 0; // conner case
  for (let key of nums) {
    if (hasMapCout[key] == null) hasMapCout[key] = 0;
    hasMapCout[key]++; // init Hashmap
  } // O(N)
  let keys = Object.keys(hasMapCout);
  for (i = 0; i < keys.length; i++) {
    if (hasMapCout[keys[i]] < 2) {
      distinctCount++;
      continue;
    }
    minHeap.push({ key: keys[i], count: hasMapCout[keys[i]] }); // init minHeap
  } // T:O(NlogN)
  while (k > 0 && minHeap.arr.length > 0) {
    k -= minHeap.arr[0].count - 1;
    if (k > 0) {
      distinctCount++;
      minHeap.pop();
    }
  } // T:O(KlogN)
  return k > 0 ? distinctCount - k : distinctCount;
}; // T:O(NlogN) S:O(N) , use maxHeap for min to have T:O(NlogK)
