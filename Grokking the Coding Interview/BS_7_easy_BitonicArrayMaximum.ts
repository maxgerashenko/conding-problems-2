// https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
//
// Bitonic Array Maximum

const find_max_in_bitonic_array = function (arr) {
  // catch error
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
      continue;
    }
    end = mid;
  }

  return arr[start]; // start = end
}; // T:O(logN) S:O(1)
