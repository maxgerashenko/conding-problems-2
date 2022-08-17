// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

function dutch_flag_sort(arr, start = 0, end = arr.length - 1, i = 0) {
  while (i <= end) {
    if (arr[i] === 1) {
      i++;
      continue;
    }
    if (arr[i] === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]]; // swap
      end--;
      continue;
    }
    if (arr[i] === 0) {
      [arr[i], arr[start]] = [arr[start], arr[i]]; // swap
      i++;
      start++;
    }
  }
} // T:O(N) S:O(1)
