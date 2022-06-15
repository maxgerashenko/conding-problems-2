// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const fruits_into_baskets = function (fruits) {
  let count = 0;
  let max = -1;
  let start = 0;
  let hashMapCount = {};

  for (let i in fruits) {
    let fruit = fruits[i];
    hashMapCount[fruit] =
      hashMapCount[fruit] == null ? 1 : hashMapCount[fruit] + 1;
    count++;

    while (Object.keys(hashMapCount).length > 2) {
      let oldFruit = fruits[start];
      hashMapCount[oldFruit] =
        hashMapCount[oldFruit] > 1 ? hashMapCount[oldFruit] - 1 : null;
      if (hashMapCount[oldFruit] == null) delete hashMapCount[oldFruit];
      count--;
    }

    max = Math.max(max, count);
  }

  return count;
}; // T:(n+n); S(1)

// def fruits_into_baskets(fruits):
//   hashMap = {}
//   max_count = 0
//   start = 0

//   for end in range(len(fruits)):
//     end_char = fruits[end]
//     if end_char not in hashMap:
//       hashMap[end_char] = 0
//     hashMap[end_char] += 1

//     while len(hashMap) > 2:
//       start_char = fruits[start]
//       hashMap[start_char] -= 1
//       if hashMap[start_char] == 0:
//         del hashMap[start_char]
//       start += 1

//     max_count = max(max_count, end - start +1)

//   return max_count
