// - The Function: Selection sort
// inputs not sorted array
// output sorted array

// - The pattern:
// Eterate from left to right. Mark first element and find the min on the right side.
// When the min is fided swap with first element if it is smaller.

// Code simples
// Ask for the help
// Code harder

function selectionSort(arr) {
  let ans = [...arr]; // O(1)

  for (let i = 0; i < ans.length - 1; i++) {
    // O(n)
    let min = i; // O(1)
    for (let j = i + 1; j < ans.length; j++) {
      // O(n)
      if (ans[j] < ans[min]) {
        // // O(1)
        min = j; // O(1)
      }
    }
    // let's don't do unnecessary swaps
    if (min !== i) {
      //O(1)
      let tmp = ans[min]; // O(1)
      ans[min] = ans[i]; // O(1)
      ans[i] = tmp; // O(1)
    }
  }
  return ans; // O(1)
} // O(n^2)

// FIXED MISTAKES 2
// GOT ERROS 2

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
