// https://www.educative.io/courses/grokking-the-coding-interview/N8XZQ1q1O46
//
// Search in Rotated Array

const search_rotated_array = function (
  arr,
  key,
  start = 0,
  end = arr.length - 1
) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return arr[mid];
    if (arr[mid] < arr[end]) {
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
        continue;
      }
      end = mid;
      continue;
    }
    if (key > arr[start] && key <= arr[mid]) {
      end = mid;
      continue;
    }
    start = mid + 1;
  }
  return -1;
}; // T:O(logN) S:O(1)
