// Longest Subarray with Ones after Replacement
//
// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ

const length_of_longest_substring = function (
  arr,
  k,
  maxLength = 0,
  start = 0,
  count = k
) {
  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 0) count--;
    while (count < 0) {
      if (arr[start] === 0) count++;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}; // T:O(N) S:O(1)
