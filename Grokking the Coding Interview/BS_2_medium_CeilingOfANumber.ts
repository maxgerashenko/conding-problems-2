// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
//
// Ceiling of a Number

// top
const search_ceiling_of_a_number = function (arr, key) {
  // catch error
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[end]) return -1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = arr[mid];
    if (key === val) return arr[mid];
    if (key < val) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }

  return arr[start]; // start = end + 1;
}; // T:O(logN) S:O(1)

// bottom
function search_ceiling_of_a_number(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key < arr[start]) return -1;

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

  return arr[end]; // end = start + 1
} // T:O(logN) S:O(1)
