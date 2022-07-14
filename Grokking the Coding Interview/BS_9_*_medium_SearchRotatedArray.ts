// https://www.educative.io/courses/grokking-the-coding-interview/N8XZQ1q1O46
//
// Search in Rotated Array

const search_rotated_array = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(end / 2 + start / 2);
    if (arr[mid] === key) {
      return arr[mid];
    }
    if (arr[start] < arr[mid]) {
      if (arr[start] <= key && key <= arr[mid]) {
        end = mid - 1;
        continue;
      }
      start = mid + 1;
      continue;
    }
    if (arr[mid] <= key && key <= arr[end]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
}; // T:O(logN) S:(1)
