// https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE
//
// Search Bitonic Array

function findMaxIndex(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
      continue;
    }
    end = mid;
  }
  return start;
} // T:O(logN) S:O(1)

function bs(arr, key, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key === arr[mid]) return mid;
    if (key > arr[mid]) {
      start = mid + 1;
      continue;
    }
    end = mid - 1;
  }
  return -1;
} // T:O(logN) S:O(1)

const search_bitonic_array = function (arr, key) {
  let maxIndex = findMaxIndex(arr, key);
  if (key === arr[maxIndex]) return maxIndex;
  let leftIndex = bs(arr, key, 0, maxIndex - 1);
  if (leftIndex !== -1) return leftIndex;
  return bs(arr, key, maxIndex + 1, arr.length - 1);
}; // T:O(logN) S:O(1)
