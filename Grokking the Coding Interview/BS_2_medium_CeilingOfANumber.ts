// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
//
// Ceiling of a Number

const search_ceiling_of_a_number = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[end]) return -1; // conner case
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return arr[mid];
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return arr[start];
}; // T:O(logN) S:O(1)
