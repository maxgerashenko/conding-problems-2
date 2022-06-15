// https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2
//
// Search in a Sorted Infinite Array

const search_in_infinite_array = function (reader, key) {
  // catch error
  let start = 0;
  let end = 1;
  while (key > reader.get(end)) {
    start = end + 1;
    end *= 2;
  }
  return findIndex(reader, key, start, end);
}; // T:O(logN) S:O(1)

function findIndex(reader, key, start, end) {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = reader.get(mid);
    if (val === key) return mid;
    if (key < val) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
} // T:O(logN) S:O(1)
