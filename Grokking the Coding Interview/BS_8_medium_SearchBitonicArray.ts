// https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE
//
// Search Bitonic Array

const search_bitonic_array = function (arr, key) {
  // catch errors
  let start = 0;
  let end = arr.length - 1;
  let maxIndex = findMax(arr);
  if (arr[maxIndex] === key) return maxIndex;
  let left = findIndex(start, maxIndex - 1, arr, key);
  return left > -1 ? left : findIndex(maxIndex + 1, end, arr, key); // right;
}; // T:O(logN) S:O(1)

const getMid = (start, end) => start + Math.floor((end - start) / 2);

function findMax(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = getMid(start, end);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
      continue;
    }
    end = mid;
  }
  return end; // start === end
} // T:O(logN) S:O(1)

function findIndex(start, end, arr, key) {
  const isAscending = start < end;
  while (start <= end) {
    let mid = getMid(start, end);
    if (key === arr[mid]) return mid;
    if ((key < arr[mid] && isAscending) || (key > arr[mid] && !isAscending)) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
} // T:O(logN) S:O(1)
