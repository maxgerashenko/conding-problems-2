// - The Function binarySearch
// inputs array, el
// output return index

// null - arr return error el return -1
// 0 - retir arrya is empty return -1
// simple - [1,2] 1 return 0
// comlicate - [1,2,3] 2 return 1
// complex - return [1,2,3] 3 return 0
// complex -
// complex -

// - The pattern: Binary search
// take sorted array
// go to the middle
// compaire midle with the element
// move left or right to the middle

// What we do if imput is null
// What we do if input is real not integer
// What we do if input not a number or string
// What we do if input is not object or array

// - Write the steps and move to code
// Ask for the help

// set left to 0
// set right to length - 1
// find the miidle elemena and compare with elemen
// if el === midle return index
// if el < mid move right tot the middle
// if el > mid move left to the right
// return -1

// Check null null 1 === -1
// Check null [123] null -1
// Check 0 or empty -1
// Check result simple [1] 1 = 0 [1,2] 2 = 1
// Check complicate [123] 2 = 1
// Check complex ---

// - Steps
// set left to 0
// set right to length - 1
// find the miidle elemena and compare with elemen
// if el === midle return index
// if el < mid move right to the middle
// if el > mid move left to the right
// return -1

// - Code simples
// Ask for the help
// Code harder

function binarySearch(arr, el) {
  if (arr.length === 0) return -1; // O(1)
  if (el == null) return 1; // O(1)

  let left = 0; // O(1)
  let right = arr.length - 1; // O(1)
  let middle = Math.floor((left + right) / 2); // O(1)

  while (arr[middle] !== el && left < right) {
    // O(log n)
    if (el < arr[middle]) {
      right = middle - 1; // O(1)
    } else {
      left = middle + 1; // O(1)
    }
    middle = Math.floor((left + right) / 2); // O(1)
  }
  return arr[middle] == el ? middle : -1; // O(1)
} // O(log n)

//            0 1 2 3 4
binarySearch([1, 2, 3, 4], 3);
//            l m   r

// I don't remembet the diffrance between = and ===
// I don't remember that 1 + 0 = 1
// I don't remember that 1 * 1 = 1
// I don't rememer how to use typeof
// I don't remember to break or continue the loop
// I don't remember that Array is Object
// I don't remember that for([key, val] in {}) = val is not string +val to make it string
// I don't check conner case by myself
// I don't want to think about coner cases
// I don't remember the diffrence between index and arr[index]

// Check null error
// Check el === null error -1
// Check 0 or empty -1
//                      l      l
// Check result simple [13] 3 [13] 1
//                       r.     r
// Check complicate [1234] 3 / 2
// Check complex ---

// FIXED MISTAKES 1
// GOT ERROS 1000000

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
