// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const length_of_longest_substring = function (
  str,
  k,
  maxLength = 0,
  start = 0,
  hashMapCount = {},
  maxCount = 0
) {
  for (let end = 0; end < str.length; end++) {
    if (hashMapCount[str[end]] == null) hashMapCount[str[end]] = 0;
    hashMapCount[str[end]]++;
    maxCount = Math.max(maxCount, hashMapCount[str[end]]);
    while (end - start + 1 - maxCount > k) {
      hashMapCount[str[start]]--;
      start++;
      maxLength = Math.max(maxLength, hashMapCount[str[end]]);
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}; // T:O(N) S:(1) 26 letters
