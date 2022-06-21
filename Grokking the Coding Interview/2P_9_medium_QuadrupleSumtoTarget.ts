// https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl
// Quadruple Sum to target

// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// 2 for
// 1 while
// 4 check of duplicates

const search_quadruplets = function (arr, target) {
  arr.sort((x, y) => x - y);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[j] === arr[j - 1] && j > i + 1) continue;
      let start = j + 1;
      let end = arr.length - 1;
      let sum = arr[i] + arr[j];
      while (start < end) {
        if (arr[start] === arr[start - 1] && start > j + 1) {
          start++;
          continue;
        }
        if (arr[end] === arr[end + 1]) {
          end--;
          continue;
        }
        let current = sum + arr[start] + arr[end];
        if (current === target) {
          quadruplets.push([arr[i], arr[j], arr[start], arr[end]]);
          start++;
          end--;
          continue;
        }
        if (current < target) {
          start++;
          continue;
        }
        end--;
      }
    }
  }
  return quadruplets;
}; // T(NlogN + N^3) S:O(N)
