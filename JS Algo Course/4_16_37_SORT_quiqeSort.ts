// - The Function: Quick sort
// inputs random array
// output sorted array

// - The pattern:
// separate array by the first value, <= go left, > got right
// call recursion on each part
// connect parts

console.clear();

// use refence here
function swap(arr, a, b) {
  // fancy swap
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function separate(arr) {
  let smallCount = 0;
  for (let i = 1; i < arr.length; i++) {
    // first swap
    if (arr[i] < arr[0]) swap(arr, ++smallCount, i);
  }
  // 2nd swap set pivit on place
  swap(arr, 0, smallCount);
  // [left) and [right]
  return [arr.slice(0, smallCount + 1), arr.slice(smallCount + 1)];
}

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let [left, right] = separate(arr);
  if (left.length === 0 || right.length === 0) return [...left, ...right];
  return [...quickSort(left), ...quickSort(right)];
}

console.log(quickSort([6, 2, 9, 4, 5, 1, 7, 8, 11, 10, 3]));

// FIXED MISTAKES
// GOT ERROS

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
