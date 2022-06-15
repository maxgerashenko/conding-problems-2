// ??? TIME COMPLEXITY QUESTION ???

// The Function flatten
// inputs array of arrays
// output array with all elements form the input arrays

// null - []
// 0 - []
// simple - [1,2] // [1,2]
// comlicate - [1,0,0]
// complex - ----

// The pattern - Recursion
// Base case
// Recursion
// return arr[0] + arr.slice(1)

// Write the steps
// if arr == null //
// input arr
// if arr is empty return arr;
// return arr[0].concat(arr.slice(1));
// Ask for the help

// Check null []
// Check 0 or empty []
// Check result simple [11 22] 1122 []
// Check complicate
// Check complex

// Code simples
// Ask for the help
// Code harder

// I don't to return the value
// I don't to return the value
function flatten(el) {
  if (el == null || el.length === 0) return [];
  if (!Array.isArray(el)) {
    return [el];
  }

  return [...flatten(el[0]), ...flatten(el.slice(1))];
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// O(n^2)

// Check null Error
// Check 0 or empty []
// Check result simple [1] + [] = [1]
// Check complicate [11 22 33] = [11+22+33] = [112233]
// Check complex ----

// Refactor

// Time O(n^2)
// Space O(1)

// Check O(1) O(log n) O(n log n)
// for solution will be O(n) or O(n^2)      !!!!!!!!!!!!!!!!!!!!!!!!

// Math solution
// Google solution
