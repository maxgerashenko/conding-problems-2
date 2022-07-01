// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const fruits_into_baskets = function (fruits) {
  let max = 0;
  let hashMapCount = {};
  let start = 0;
  for (let el of fruits) {
    hashMapCount[el] = hashMapCount[el] == null ? 1 : hashMapCount[el] + 1;

    while (Object.keys(hashMapCount).length > 2) {
      hashMapCount[fruits[start]]--;
      if (hashMapCount[fruits[start]] === 0) delete hashMapCount[fruits[start]];
      start++;
    }
    max = Math.max(
      max,
      Object.values(hashMapCount).reduce((pre, cur) => pre + cur, 0)
    );
  }
  return max;
}; // T:O(N+K) S:O(K)
