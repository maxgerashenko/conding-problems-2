// https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6
// Minimum Window Sort

// Find not not sorted subarray

// iterate arrya
// find first unsorted num from Start
// find first unsorted num from End
// extend start to the left, when num < Min
// extend end to the right whne when > Max

const shortest_window_sort = function(arr) {
  // Find sub array to sort

  // iterate array
  // use 2P + SW + min/max

  // iterate array from the start
  // find find first unsorted num from the start
  // find find first unsorted num form the end
  // find sub max/min
  // extend end when i < max
  // extend start when i > min
  // return the length

  // find first unsorted num from the start
  let start = 0;
  while (start < arr.length && arr[start + 1] >= arr[start]) {
    start++;
  }

  // fund first unsorted nun from the end
  let end = arr.length - 1;
  while (end > start && arr[end - 1] <= arr[end]) {
    end--;
  }

  const isSorted = start === end;
  if (isSorted) return 0;

  // find max and min in sub array
  minSub = Infinity;
  maxSuB = -Infinity;
  for (let i = start; i <= end + 1; i++) {
    minSub = Math.min(minSub, arr[end]);
    maxSuB = Math.max(maxSuB, arr[end]);
  }

  // extend start to left
  while (start > 0 && arr[start - 1] > minSub) {
    start--;
  }

  // extend end to right
  while (end < arr.length - 1 && arr[end + 1] < maxSuB) {
    end++;
  }

  return end - start + 1;
}; // T: O(N + N + N + N) S: O(1)
