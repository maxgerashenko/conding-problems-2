// https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
//
// Next Letter

const search_next_letter = function (
  letters,
  key,
  start = 0,
  end = letters.length - 1
) {
  if (key < letters[start]) return letters[end];
  if (key > letters[end]) return letters[start];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midEl = letters[mid];
    if (key === midEl) return letters[(mid + 1) % letters.length];
    if (key < midEl) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return letters[start];
}; // T:O(LogN) S:O(1)
