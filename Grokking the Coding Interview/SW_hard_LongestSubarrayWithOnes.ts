// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
// Longest Subarray with Ones after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const longest_substring_with_k_distinct = function (str, k) {
  let length = 0;
  let indexMap = {};
  let max = 0;

  for (let i in str) {
    let el = str[i];
    length++;
    indexMap[el] = indexMap[el] == null ? 0 : indexMap[el] + 1;

    while (Object.keys(indexMap).length > k) {
      let firstEl = str[+i + 1 - length];
      if (indexMap[firstEl] > 0) indexMap[firstEl]--;
      if (indexMap[firstEl] === 0) delete indexMap[firstEl];
      length--;
    }
    max = Math.max(max, length);
  }

  return max;
}; // T:O(N) S:T(K + 1)

// def length_of_longest_substring(arr, k):
//   # max length
//   # sliding window
//   # one count
//   # while window length - oncount > k

//   maxLength = 0
//   countOnes = 0

//   start = 0
//   for end in range(len(arr)):
//     if arr[end] == 1:
//       countOnes += 1

//     while end - start + 1 - countOnes > k:
//       if arr[start] == 1:
//         countOnes -= 1
//       start += 1

//     maxLength = max(maxLength, end - start + 1)

//   return maxLength
