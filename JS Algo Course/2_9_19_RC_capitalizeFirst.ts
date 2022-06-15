// The Function recursive capitalizeFirst to capitalize first letter of string in array
// @Inputs array of strings
// @Output capitalize every first leter of given string in array

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// null - []
// 0 -[]
// simple - a A
// comlicate - a b A B
// complex - abs bsa sba Abs Bsa Sba

// The pattern - Recursion
// base case
// recursion function

// Write the steps
// when arr == null return []
// when arr is empty return []
// take the elmemnt and capitalize the firs letter
// return el + rest part of ther array give back to the function
// Ask for the help

// Check null []
// Check 0 or empty []
// Check result simple [a] A [ab]
// Check complicate [Ab] [a b]  AB
// Check complex ----

// Code simples
// Ask for the help
// Code harder

function capitalizeFirst(arr) {
  if (arr == null) return []; // O(n)
  if (arr.length === 0) return []; // O(n);
  let el = arr[0];
  let str = el[0].toUpperCase() + el.slice(1); // O(2n)
  return [str, ...capitalizeFirst(arr.slice(1))]; //O(n) * O(n)
} // O(n2 +n)  O(n)

// Check null [] []
// Check 0 or empty []
// Check result simple [a] a
// Check complicate [a b] // A B
// Check complex [ab] [ab] Ab

// Refactor

// Time O(n^2)
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
