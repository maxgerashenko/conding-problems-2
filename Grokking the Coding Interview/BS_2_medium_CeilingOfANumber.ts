// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
//
// Ceiling of a Number

const search_ceiling_of_a_number = function (
  arr,
  key,
  start = 0,
  end = arr.length - 1
) {
  if (key > arr[end]) return -1; // conner case
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midEl = arr[mid];
    if (key === midEl) return mid; // match
    if (key < midEl) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return start;
}; // T:O(logN) S:O(1)
