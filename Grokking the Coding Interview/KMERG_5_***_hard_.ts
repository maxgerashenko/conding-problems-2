// https://www.educative.io/courses/grokking-the-coding-interview/B1JKxRB8EDJ#K-Pairs-with-Largest-Sums-(Hard)
//
// K Pairs with Largest Sums (Hard)

// Given two sorted arrays in descending order, find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_k_largest_pairs = function (
  nums1,
  nums2,
  k,
  minHeap = new Heap(([x1, x2], [y1, y2]) => x1 + x2 - y1 - y2)
) {
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      minHeap.push([n1, n2]);
      if (minHeap.arr.length <= k) continue;
      minHeap.pop();
    }
  }
  return minHeap.arr;
}; // T:O(N^2logK) S:O(K)

function find_k_largest_pairs(
  nums1,
  nums2,
  k,
  results = [],
  maxHeap = new Heap((x, y) => y.val - x.val)
) {
  let i = 0;
  let j = 0;
  maxHeap.push(nums1[i + 1]);
  maxHeap.push(nums2[j + 1]);
  while (results.length < k) {
    results.push([nums1[i], nums2[j]]);
    let val = maxHeap.pop();
    if (val == nums1[i + 1]) {
      i++;
      maxHeap.push(nums1[i + 1]);
    } else {
      j++;
      maxHeap.push(nums2[j + 1]);
    }
  }
  return results;
} // T:O(KlogK) S:O(K)