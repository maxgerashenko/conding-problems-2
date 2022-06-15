// Function someRecursive inputs array and callback, outputs true if a single arrya elements return true on the callback.

// someRecursive([1], el => el % 2 === 1); // true
// someRecursive([1,2], el => el % 2 === 1); // true
// someRecursive([2], el => el % 2 === 1); // true
// someRecursive([0], el => el % 2 === 1); // false
// someRecursive([], el => el % 2 === 1); // false

// The pattern - Recursion
// base case
// recursion

// Write the steps
// if array is empty return false
// if the feedback with the first elemtn is true return true
// if not call the someRucrsive with the rest of the array

// Check 0 // null
// Check result simple
// [1] true
// [1,2] true
// [2] false

// Code simples
// Ask for the help
// Code harder

// !!! I don't do return

function someRecursive(arr, callback) {
  // O(n * (m-1)) O(n^2)
  if (arr.length === 0) return false; //O(1)
  if (callback(arr[0])) return true; //O(1)
  someRecursive(arr.slice(1), callback); // O(n)
}

// Check 0 or empty  false
// Check result simple
// 1 true
// 2 false
// 0 false
// Check Complicated
// 10 true
// 01 true
// Check complex

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
