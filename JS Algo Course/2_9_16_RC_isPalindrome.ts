// The problem
// Write the function that takes the string and return true/false if the string is palidromic(can be read in bothh directions)

// Inputs
// str: string

// Outputs
// true/false

// Examples
// null - // false
// 0 - '' // true
// simple - // '1' // true
// comlicate - '12' false , '121' // true
// complex - ----

// The pattern - Recursion
// base case
// recursion

// Write the steps

// Check null // false
// Check 0 or empty // true
// Check result simple // '1' // 1 === 1 '' //true
// Check complicate '121' 1 2
// Check complex --- '123123'

function isPalindrome(str) {
  // O(n/2)
  // add whatever parameters you deem necessary - good luck!
  // null case if null return false
  if (str == null) return false; // O(1)
  // base case if str lenght equal 0 retrn true
  if (str.length === 0) return true; // O(1)
  // if 1 and last not equeal return false or call recursion for the rest
  let long = str.length; // O(1)
  if (str[0] !== str[long - 1]) return false; // O(1)
  return isPalindrome(str.slice(1, long - 1)); // O(n)
}

// Check null // false
// Check 0 or empty // true
// Check result simple // '1' // true
// Check complicate // 123  1 !== 3 // false 121 1 == 1 2 == true
// Check complex ----

// Refactor

// Time O(n^2/2) // O(n^2)
// Space O(1)

// Check O(1) O(log n) O(n log n)
// 2 Pointers could be O(n/2) = O(n)

// Math solution
// Google solution
