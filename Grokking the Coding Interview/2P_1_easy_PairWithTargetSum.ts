// https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
// Pair with Target Sum

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Brout Force O(N)
// Binary Search O(N∗logN)
// Hash Map O(N) O(N)
// 2 Pointers O(N) O(1)

const pair_with_targetsum = function (arr, target_sum) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    console.log(sum);

    if (sum === target_sum) return [start, end];
    if (sum > target_sum) end--;
    if (sum < target_sum) start++;
  }

  return [-1, -1];
}; // T:O(N) S:O(1)

// def pair_with_targetsum(arr, target_sum):
//   # sorted array
//   # 2 pointers

//   start = 0
//   end = len(arr) - 1
//   while start < end:
//     sum_cur = arr[start] + arr[end]

//     # base case
//     if sum_cur == target_sum:
//       return [start, end]

//     if sum_cur > target_sum:
//       end -= 1

//     if sum_cur < target_sum:
//       start += 1

//   return [-1,-1]

// Alternative

function pair_with_target_sum(arr, targetSum) {
  // hasMap substraction

  let hashMapSubst = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (hashMapSubst[num] != null) {
      return [hashMapSubst[num], i];
    }

    hashMapSubst[targetSum - num] = i;
  }
  return [-1, -1];
} // Time O(N) Spase O(N)

// def pair_with_targetsum(arr, target_sum):
//   hashMapSubIndex = {}
//   for i, num in enumerate(arr):
//     if num in hashMapSubIndex:
//       return [hashMapSubIndex[num], i]
//     hashMapSubIndex[target_sum - num] = i

//   return [-1, -1]
