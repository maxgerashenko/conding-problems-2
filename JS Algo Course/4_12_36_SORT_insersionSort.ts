// - The Function: insertionSort
// inputs random array
// output sorted array

// - The pattern: Insertion Sort
// Iterate from left to right
// Compare current element with previous.
// If it is smaller swap
// Iterate to be begining

// Code simples
// Ask for the help
// Code harder

function insertionSort(arr) {
  const ans = [...arr]; // O(1)
  if (ans.length < 2) return ans; // O(1)
  for (let i = 1; i < ans.length; i++) {
    const tmp = arr[i]; // O(1)
    let j; // O(1)
    for (j = i - 1; j >= 0 && tmp < ans[j]; j--) {
      ans[j + 1] = ans[j]; // O(1)
    } // O(n)
    ans[j + 1] = tmp; // O(1)
  } // O(n)
  return ans;
} // O(n**2)

console.log(insertionSort([2, 3, 2, 290, 2, 1, 4]));
console.log(insertionSort([2, 3, 1, 454, 4, 3, 2, 4, 2]));

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
