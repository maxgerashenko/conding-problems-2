// https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
//
// Next Letter

const search_next_letter = function (arr, key) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor(start / 2 + end / 2);
    if (arr[mid] === key) return key;
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return arr[start] > key ? arr[start] : arr[0];
}; // T:O(logN) S:O(1)
