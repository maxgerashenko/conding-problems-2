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

  while (arr[start] >= arr[start - 1] && start <= end) start++;
  while (arr[end] <= arr[end + 1] && start <= end) end--;

  let max = arr.slice(start, end + 1).reduce((max, el) => Math.max(max, el), Number.MIN_SAFE_INTEGER);
  let min = arr.slice(start, end + 1).reduce((min, el) => Math.min(min, el), Number.MAX_SAFE_INTEGER);

  while (arr[start-1] > min) start--;
  while (max > arr[end+1]) end++;

  console.log(arr, arr[start], arr[end]);
  return end - start + 1;
}; // T:O(N) S:O(1)
