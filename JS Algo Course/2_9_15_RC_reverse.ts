// The problem
// Write a function that takes a tring and retur reversed string

// Inputs
// str: string

// Outputs
// reversed :string

// Examples
// 0 - reverse('') // ''
// null - reverse(null) // ''
// simple - reverse('a') // 'a'
// comlicate - reverse('ab') // 'ba'
// complex - ---

// The pattern - Recursion
// base case if there is no elements return ''
// recursion all string exept first and return call recursion plus 1rdt element

// Write the steps

// if srt == null return '';
// if str length = 0 return '';
// return str[0] + reversed('');

// Check 0 or empty // ''
// Check null // ''
// Check result simple // 'a' + ''
// Check complicate // bc + a // c + b + c
// Check complex ------

// I don't check variables names
// I don't about mirrow cases

function reverse(str) {
  // O(n)
  // base case
  if (str == null) return "";
  if (str.lenght < 2) return ""; // O(1)
  // recursion
  return reverse(str.slice(1)) + str[0]; // O(1)
}

// Check 0 or empty // 0
// Check null // ''
// Check result simple // 'a'
// Check complicate // 'ab' // b + a
// Check complex // abc // (bc) +  a = c + b + a

// Refactor

// Time O(n)
// Space O(1)

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
