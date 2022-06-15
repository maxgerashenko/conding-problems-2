// https://www.educative.io/courses/grokking-the-coding-interview/N8XZQ1q1O46
//
// Search in Rotated Array

const search_rotated_array = function (arr, key) {
  // catch error
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] === arr[start] && arr[mid] === arr[end]) {
      start++;
      end--;
    } // conner case with duplicates
    if (arr[start] < arr[mid]) {
      // left is sorted
      if (key < arr[start] || key > arr[mid]) {
        start = mid + 1; // go right
        continue;
      }
      end = mid - 1; // go left;
      continue;
    }
    // right is sorted
    if (key < arr[mid] || key > arr[end]) {
      end = mid - 1; // go left
      continue;
    }
    start = mid + 1; // go right
  }
  return -1;
}; // T:O(longN) S:O(1)
