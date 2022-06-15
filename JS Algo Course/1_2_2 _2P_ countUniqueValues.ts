// I Don't return value

function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 3]));

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// You must do this with constant or O(1) space and O(n) time
