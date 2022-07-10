// https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz
//
// Number Range


function bs(arr, key, isMinIndex = true) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor(end / 2 + start / 2);
    if (key === arr[mid]) {
      if (isMinIndex) {
        if (arr[mid - 1] !== key) return mid;
        end = mid - 1;
        continue;
      }
      if (arr[mid + 1] !== key) return mid;
      start = mid;
      continue;
    }
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
}

const find_range = function (arr, key) {
  let start = bs(arr, key);
  if (start === -1) return [-1, -1];
  let end = bs(arr, key, false);
  return [start, end];
}; // T:O(NlogN) S:O(1)
