// https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl
// Quadruple Sum to target

// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

const search_quadruplets = function (arr, target) {
  arr.sort((x, y) => x - y);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[j] === arr[j - 1]) continue;
      let sum = arr[i] + arr[j];
      let start = j + 1;
      let end = arr.length - 1;
      while (start < end) {
        if (arr[start] === arr[start - 1] && start > j + 1) {
          start++;
          continue;
        }
        if (arr[end] === arr[end + 1]) {
          end--;
          continue;
        }
        if (arr[start] + arr[end] === target - sum) {
          quadruplets.push([arr[i], arr[j], arr[start], arr[end]]);
          start++;
          end--;
        }
        if (arr[start] + arr[end] < target - sum) {
          start++;
          continue;
        }
        end--;
      }
    }
  }
  return quadruplets;
}; // T:O(NlogN + N^3)
