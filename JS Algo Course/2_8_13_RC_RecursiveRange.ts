// The problem
// Write a function recursiveRage that taks a number and return the sum of all numbers till 0

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// Steps
// null return 0;
// num === 0 return num;

// Pattern
// Base case
// Recursion

function recursiveRange(num) {
  if (!num) return 0;
  return num + recursiveRange(num - 1);
}

// Refactored code
function recursiveRangeSHORT(num) {
  return !num ? 0 : num + recursiveRange(num - 1);
}

// check result
// 2 + 2 + 1 + 0 = 3
// 0 == 0
// 3 + 2 + 1 + 0 = 6

// Complexity
// O(n)

// Math solution
function sumOfArithmeticProgression(num) {
  return (num * (num + 1)) / 2;
}
// O(1) solution
