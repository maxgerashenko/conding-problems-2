// https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz
//
// Number Range

const find_range = function (arr, key) {
  // catch error
  let index = findEl(arr, key);
  if (index === -1) return [-1, -1];
  let start = index;
  let end = index;
  while (start > 0 && arr[start - 1] === key) start--;
  while (end < arr.length && arr[end + 1] === key) end++;
  return [start, end];
}; // T:O(logN) S:(1)

function findEl(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = arr[mid];
    if (key === val) return mid;
    if (key < val) {
      end = mid - 1;
      continue;
    }
    start = mid + 1;
  }
  return -1;
} // T:O(logN) S:O(N)
