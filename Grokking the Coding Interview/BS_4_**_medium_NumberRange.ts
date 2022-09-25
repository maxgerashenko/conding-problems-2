// https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz
//
// Number Range

function BS(arr, key, start, end, equal, leftSide) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (equal(mid)) return mid;
    if (leftSide(mid)) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
}
const find_range = function (arr, key, start = 0, end = arr.length - 1) {
  let leftBorder = BS(
    arr,
    key,
    start,
    end,
    (mid) => arr[mid] === key && arr[mid - 1] !== key,
    (mid) => arr[mid] >= key
  );
  if (leftBorder == null) return [-1, -1];
  let rightBorder = BS(
    arr,
    key,
    leftBorder,
    end,
    (mid) => arr[mid] === key && arr[mid + 1] !== key,
    (mid) => arr[mid] > key
  );
  return [leftBorder, rightBorder];
}; // T:O(lonN) S:O(1)
