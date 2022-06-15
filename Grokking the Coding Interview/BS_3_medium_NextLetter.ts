// https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
//
// Next Letter

const search_next_letter = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[end] || key < arr[start]) return arr[start];
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

  return arr[start]; // start = end + 1;
}; // T:O(logN) S:O(1)
