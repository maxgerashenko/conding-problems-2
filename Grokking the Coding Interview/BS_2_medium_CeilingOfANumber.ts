// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
//
// Ceiling of a Number

const search_ceiling_of_a_number = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(end / 2 + start / 2); // left
    if (arr[mid] === key) return mid;
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  if (arr[start] > key) return start;
  return -1;
}; // T:O(logN) S:(1)

// max that < key
// if(key > arr[start-1]) return arr[start-1]
