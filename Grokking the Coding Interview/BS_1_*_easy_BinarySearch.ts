// https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO
//
// Binary Search

const binary_search = function (
  arr,
  key,
  start = 0,
  end = arr.length - 1,
  isAscending = arr[start] < arr[end]
) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midEl = arr[mid];
    if (key === midEl) return midEl;
    (isAscending && key > midEl) || (!isAscending && key < midEl)
      ? (start = mid + 1)
      : (end = mid - 1);
  }
  return -1;
}; // T:O(logN) S:O(1)

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
