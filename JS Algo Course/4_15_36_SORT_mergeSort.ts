// - The Function: Merge sort
// inputs random array
// output soted array

// - The pattern:
// split everithning in 2 arrays
// meger Arrays

// Code simples
// Ask for the help
// Code harder

function merge(arr1, arr2) {
  let ans = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    let tmp = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
    ans.push(tmp);
  }
  ans = i < arr1.length ? ans.concat(arr1.slice(i)) : ans;
  ans = j < arr2.length ? ans.concat(arr2.slice(j)) : ans;
  return ans;
}

function mergeSort(arr) {
  let middle = ~~(arr.length / 2);

  if (arr.length < 2) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
} // O(n log n)

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
