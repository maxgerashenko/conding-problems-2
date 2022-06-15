// The Function capitalizeWords
// inputs array of words
// output new array words capitalized

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// What we do if imput is null
// What we do if input is real not integer
// What we do if input not a number or string
// What we do if input is not object or array

// The pattern - RECURSION
// Base case
// Recursion function

// Write the steps
// if array is null return error
// if array is empty return [];
// take fisrt element and capitalize it and add it recursion call with the rest of the array
// Ask for the help ????

// Check null error
// Check 0 or empty []
// Check result simple [a] [A]
// Check complicate [aaa bbb] [AAA BBB]
// Check complex ----

// Code simples
// Ask for the help
// Code harder

function capitalizeWords(arr) {
  if (arr === null) throw new Error("arr is undefined");
  if (Array.isArray(arr)) throw new Error("arr is not Array");
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

// Check null  error not array
// Check wrong type error
// Check 0 or empty 0
// Check result simple [aaa] [AAA, ...[]]
// Check complicate
// Check complex

// FIXED MISTAKES 2
// GOT ERROS 1

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
