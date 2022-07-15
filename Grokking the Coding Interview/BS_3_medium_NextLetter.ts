// https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
//
// Next Letter

const search_next_letter = function (letters, key) {
  let start = 0;
  let end = letters.length - 1;
  if (key > letters[end]) return letters[start]; // conner case
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (letters[mid] === key) return letters[mid];
    if (key < letters[mid]) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return letters[start];
}; // T:O(logN) S:O(1)
