// https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2
//
// Search in a Sorted Infinite Array

const search_in_infinite_array = function (reader, key) {
  let start = 0;
  let end = 0;
  while (reader.get(end) < key) {
    start = end + 1;
    end = (end + 1) * 2;
  }
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (reader.get(mid) === key) return mid;
    if (key > reader.get(mid)) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
}; // T:O(logN + logN) S:O(1)
