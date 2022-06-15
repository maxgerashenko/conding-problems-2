// The problem
// Write the function that takes the number and return sum of fibonachi progression

// Inputs
// nth

// Outputs
// sum

// Examples
// 0 = 0
// null = 0
// simple 0;  1 1 2 3 5
// comlicate 5 = 1 1 2 3 5
// complex ---

// The pattern - Recursion
// base case
// recursion

// Write the steps
// n v = 2 prev=1
// if !n return 0
// if n < 3 return 1
// return v + f( n-1, v+prev, v)

// Check 0 or empty 0
// 0 = 0
// Check null 0;
// Check result the simple 1=1; 2=1;
// Check complicate // 4 4,2,1 3,3,2 2,5,3
// Check complex ---

// Code simples & ask the help
// Code harder

//

function fib(n) {
  // O(n)
  //base vase
  if (n <= 2) return 1; // O(1)
  //recursion case
  return fib(n - 2) + fib(n - 1); // O(1)
}

// 0=1
// 1=1
// 2=1
// 3=
// Check
// null 0
// 0 0
// 1 0
// 2 1
// 3 311 221 2
// 5 511 421 332 253 5

// Time O(N)
// Space O(?)

// Check O(1) O(log n) O(n log n)

// Refactor

// Math solution
function fibMath(n) {
  const Phi = (Math.sqrt(5) + 1) / 2;
  const phi = (Math.sqrt(5) - 1) / 2;
  return Math.round((Math.pow(Phi, n) - Math.pow(-phi, n)) / Math.sqrt(5));
}
// Google solution
