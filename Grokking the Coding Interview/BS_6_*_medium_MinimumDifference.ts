// https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9
//
// Minimum Difference

const search_min_diff_element = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key < arr[start]) return arr[start];
  if (key > arr[end]) return arr[end];
  while (start <= end) {
    let mid = Math.floor(end / 2 + start / 2);
    if (arr[mid] === key) return arr[mid];
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }

  return key - arr[end] < arr[start] - key ? arr[end] : arr[start];
}; // T:O(logN) S:O(1)
