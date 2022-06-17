// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
// Squaring a Sorted Array

// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = function (arr) {
  let squares = []
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if(Math.pow(arr[start], 2) > Math.pow(arr[end], 2)){
      squares.unshift(Math.pow(arr[start],2));
      start++
      continue;
    }
    squares.unshift(Math.pow(arr[end],2));
    end--;
  }

  return squares;
}; //T:O(n) S:O(n)
