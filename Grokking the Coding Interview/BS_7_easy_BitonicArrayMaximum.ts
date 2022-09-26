// https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
//
// Bitonic Array Maximum

const find_max_in_bitonic_array = function (
  arr,
  start = 0,
  end = arr.length - 1
) {
  if (arr[start] > arr[start + 1]) return arr[start]; // conner case
  if (arr[end] > arr[end - 1]) return arr[end]; // conner case
  while (start <= end) {
    let mid = Math.floor(start + end / 2 - start / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return arr[mid]; // base case
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
}; // T:O(logN) S:O(1)
