// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const remove_duplicates = function (arr, start = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] === arr[i]) continue;
    if (i === start) {
      start++;
      continue;
    }
    start++;
    [arr[start], arr[i]] = [arr[i], arr[start]];
  }
  return start + 1;
}; // T:O(N) S:O(1)
