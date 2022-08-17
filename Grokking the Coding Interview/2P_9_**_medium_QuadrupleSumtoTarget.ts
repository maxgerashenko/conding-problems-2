// https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl
// Quadruple Sum to target

// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// 2 for
// 1 while
// 4 check of duplicates

const search_quadruplets = function (arr, target, results = []) {
  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i - 1] === arr[i]) continue;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j - 1] === arr[j]) continue;
      let start = j + 1;
      let end = arr.length - 1;
      while (start < end) {
        let sum = arr[i] + arr[j] + arr[start] + arr[end];
        if (sum === target) {
          results.push([arr[i], arr[j], arr[start], arr[end]]);
          start++;
          end--;
          while (arr[start] === arr[start - 1]) start++;
          while (arr[end] === arr[end + 1]) end--;
        }
        if (sum < target) start++;
        if (sum > target) end--;
      }
    }
  }
  return results;
}; // T:O(NlogN * N^3) S:O(1)
