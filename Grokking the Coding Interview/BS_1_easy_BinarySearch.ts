// https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO
//
// Binary Search

const binary_search = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = arr[mid];
    if (key === val) return mid;
    if ((key < val && isAscending) || (key > val && !isAscending)) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
}; // T:O(logN) S:O(1)
