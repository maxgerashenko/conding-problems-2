// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const remove_duplicates = function (arr, slow = 0, fast = 0) {
  while (fast < arr.length) {
    if (arr[fast] === arr[slow]) {
      fast++;
      continue;
    }
    [arr[slow + 1], arr[fast]] = [arr[fast], arr[slow + 1]];
    fast++;
    slow++;
  }
  return slow + 1;
}; // T:O(N) S:O(1)
