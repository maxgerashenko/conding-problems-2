// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const fruits_into_baskets = function (
  fruits,
  k = 2,
  start = 0,
  end = 0,
  count = 0,
  max = 0,
  hashMapCount = {}
) {
  for (let end = 0; end < fruits.length; end++) {
    if (hashMapCount[fruits[end]] == null) hashMapCount[fruits[end]] = 0;
    hashMapCount[fruits[end]]++;
    count++;
    while (start < end && Object.keys(hashMapCount).length > k) {
      hashMapCount[fruits[start]]--;
      if (hashMapCount[fruits[start]] === 0) delete hashMapCount[fruits[start]];
      start++;
      count--;
    }
    max = Math.max(max, count);
  }
  return max;
}; // T:O(N) S:O(1)
