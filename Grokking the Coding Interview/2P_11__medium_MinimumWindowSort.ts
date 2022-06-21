// https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6
// Minimum Window Sort

// Find not not sorted subarray

// iterate arrya
// find first unsorted num from Start
// find first unsorted num from End
// extend start to the left, when num < Min
// extend end to the right whne when > Max

const shortest_window_sort = function (arr) {
  let start = 1;
  let end = arr.length - 2;

  while (arr[start] > arr[start - 1] && start <= end) {
    start++;
  }

  while (arr[end - 1] < arr[end] && start <= end) {
    end--;
  }

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = start; i <= end; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  while (min < arr[start - 1]) {
    start--;
  }

  while (max > arr[end + 1]) {
    end++;
  }

  return end - start + 1;
}; // T:O(N) S:O(N)
