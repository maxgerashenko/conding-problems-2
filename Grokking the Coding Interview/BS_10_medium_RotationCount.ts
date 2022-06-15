// https://www.educative.io/courses/grokking-the-coding-interview/7nPmB8mZ6vj
//
// Rotation count

const count_rotations = function (arr) {
  // catch error

  const isSorted = (start, end) => arr[start] < arr[end];
  const getMid = (start, end) => start + Math.floor((end - start) / 2);
  const isBorder = (i) => arr[i] > arr[i + 1];
  const isDuplicate = (start, mid, end) =>
    arr[start] === arr[mid] && arr[mid] === arr[end];

  let start = 0;
  let end = arr.length - 1;
  if (isSorted(start, end)) return 0;
  while (start < end) {
    let mid = getMid(start, end);
    if (isBorder(mid)) return mid + 1;
    if (isDuplicate(start, mid, end)) {
      start++; // left is irrelevant;
      continue;
    }
    if (isSorted(start, mid)) {
      // left sorted
      start = mid + 1; // go right
      continue;
    }
    end = mid; // keep unsorted
  }
}; // T:O(logN) S:O(1)
