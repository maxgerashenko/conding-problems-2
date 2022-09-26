// https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
//
// Bitonic Array Maximum

const find_max_in_bitonic_array = function (
  arr,
  start = 0,
  end = arr.length - 1
) {
  while (start <= end) {
    if (start === end) break;
    let mid = Math.floor(start + end / 2 - start / 2);
    let midEl = arr[mid];
    if (midEl > arr[mid + 1]) {
      end = mid;
      continue;
    }
    start = mid + 1;
  }
  return start;
}; // T:O(logN) S:O(1)
