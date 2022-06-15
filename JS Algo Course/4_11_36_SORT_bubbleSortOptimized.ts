// - The Function: sort array
// inputs array
// output sorted array

// - The pattern: Bubble sort
// swap to 2 values, and over and over again

// Steps
// copy array
// create for i from the end - 1
// create for j from the begin
// if j > j + 1 swap
// return sorted

// Code simples
// Ask for the help
// Code harder

function bubbleSort(arr) {
  console.log("sorting...");
  let ans = [...arr];

  for (let i = 1; i < ans.length; i++) {
    for (let j = ans.length - 1; j >= i; j--) {
      if (ans[j] < ans[j - 1]) {
        let tmp = ans[j];
        ans[j] = ans[j - 1];
        ans[j - 1] = tmp;
      }
    }
  }

  return ans;
} // O(n**2)

// - Check null
// Check 0 or empty
// Check result simple
// Check complicate
// Check complex

// FIXED MISTAKES
// GOT ERROS

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
