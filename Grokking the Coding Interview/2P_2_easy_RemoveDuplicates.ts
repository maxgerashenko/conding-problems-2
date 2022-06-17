// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

const remove_duplicates = function (arr) {
  let start = -1;
  let cleanArray = [];

  for (let el of arr) {
    if (el === arr[start]) {
      start++;
      continue;
    }
    cleanArray.push(el);
    start++;
  }

  return cleanArray.length;
}; // T:O(N) S:(1)

// def remove_duplicates(arr):
//   start = 0
//   for end in range(1,len(arr)):
//     # : at the end
//     if arr[start] != arr[end]:
//       start += 1
//       arr[start] = arr[end]

//   return start + 1
