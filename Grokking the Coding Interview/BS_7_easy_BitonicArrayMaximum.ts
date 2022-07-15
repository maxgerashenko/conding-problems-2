// https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
//
// Bitonic Array Maximum

const find_max_in_bitonic_array = function (
  arr,
  start = 0,
  end = arr.length - 1
) {
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
      continue;
    }
    start = mid + 1;
  }
  return arr[start];
}; // T:O(logN) S:O(N)
