// Longest Subarray with Ones after Replacement
//
// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ

const length_of_longest_substring = function (arr, k) {
  let maxCount = -1;
  let start = 0;

  for (let i in arr) {
    let num = arr[i];
    if (num === 0) k--;

    while (k < 0) {
      let numStart = arr[start];
      if (numStart === 0) k++;
      start++;
    }

    maxCount = Math.max(maxCount, +i-start+1);
  }

  return maxCount;
}; // T:O(n) S:O(1)
