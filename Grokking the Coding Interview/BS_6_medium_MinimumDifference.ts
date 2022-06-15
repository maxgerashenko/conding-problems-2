// https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9
//
// Minimum Difference

const search_min_diff_element = function (arr, key) {
  // catch error
  let start = 0;
  let end = arr.length - 1;
  if (key < arr[start]) return arr[start];
  if (key > arr[end]) return arr[end];
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = arr[mid];
    if (key === val) return val;
    if (key < val) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return arr[start] - key < key - arr[end] ? arr[start] : arr[end]; // start = end + 1;
}; // T:O(logN) S:O(1)
