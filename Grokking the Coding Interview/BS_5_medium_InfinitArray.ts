// https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2
//
// Search in a Sorted Infinite Array

const search_in_infinite_array = function (reader, key, start = 0, end = 1) {
  if (reader.get(0) === key) return 0; // conner case
  while (reader.get(end) < key) {
    end *= 2;
  } // find end
  while (start <= end) {
    mid = Math.floor(start + end / 2 - start / 2);
    if (reader.get(mid) === key) return mid;
    if (key > reader.get(mid)) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
}; // T:O(logN) S:O(1)
