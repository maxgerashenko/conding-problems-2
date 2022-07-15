// https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO
//
// Binary Search

const binary_search = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return arr[mid];
    if ((isAscending && key > arr[mid]) || (!isAscending && key < arr[mid])) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
}; // T:O(logN) S:O(1)
