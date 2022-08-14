// https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6
// Minimum Window Sort

// Find not not sorted subarray

// iterate arrya
// find first unsorted num from Start
// find first unsorted num from End
// extend start to the left, when num < Min
// extend end to the right whne when > Max

const shortest_window_sort = function (
  arr,
  start = 0,
  end = arr.length - 1,
  min = Infinity,
  max = -Infinity
) {
  while (start < end && arr[start] < arr[start + 1]) start++;
  if (start === end) return 0; // connet case array is sorted
  while (end > start && arr[end] > arr[end - 1]) end--;
  for (i = start + 1; i < end; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  while (min < arr[start]) start--;
  while (max > arr[end]) end++;

  return end - 1 - start - 1 + 1;
}; // T:O(N) S:O(1)
