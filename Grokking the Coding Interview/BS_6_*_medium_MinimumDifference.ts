// https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9
//
// Minimum Difference

const search_min_diff_element = function (
  arr,
  key,
  start = 0,
  end = arr.length,
  minDiff = Number.MAX_SAFE_INTEGER
) {
  while (start <= end) {
    let mid = Math.floor(start + end / 2 - start / 2);
    let midEl = arr[mid];
    minDiff = Math.abs(key - midEl) < Math.abs(key - minDiff) ? midEl : minDiff;
    if (midEl === key) return key;
    if (key > midEl) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return minDiff;
}; // T:O(logN) S:O(1)
