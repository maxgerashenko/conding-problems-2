// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
// Squaring a Sorted Array

// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = function (arr) {
  // find all UNIQUE triplets in the arrya with sum === 0
  //
  // sort array
  // iterate array
  // skip i if i == i-1
  // use 2 pointers form 2 sides
  // while start < end not <= coz need 2 numbers
  // add triplet if sum === 0
  // skip start while start < end &&  start === start - 1, coz cycle
  // skip end while end < end && end === end + 1, coz cycle
  // increment start if i + start + end < 0
  // decrement end if i + start + end > 0
  // return triplets

  // init array
  let result = [];

  // use 2 pointers from 2 sides
  let start = 0;
  let end = arr.length - 1;
  // coz need every number
  while (start <= end) {
    if (Math.pow(arr[start], 2) >= Math.pow(arr[end], 2)) {
      result.unshift(Math.pow(arr[start], 2));
      start++;
      continue;
    }

    result.unshift(Math.pow(arr[end], 2));
    end--;
  }

  // return result
  return result;
}; // O(N) O(N)
