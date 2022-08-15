// Cycle in a Circular Array
// https://www.educative.io/courses/grokking-the-coding-interview/NE67J9YMj3m#space-complexity

// Cycle in a Circular Array (hard) #
// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

// If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

// Example 1:

// Input: [1, 2, -1, 2, 2]
// Output: true
// Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

const circular_array_loop_exists = function (arr, len = arr.length, map = {}) {
  let step = (i, step = arr[i]) =>
    (map[i] =
      map[i] != null
        ? map[i]
        : i + step > 0
        ? (i + step) % len
        : len + ((i + step) % len));
  for (let i = 0; i < len; i++) {
    let slow = (fast = i);
    let isForward = arr[i] > 0;
    while (arr[slow] > 0 === isForward) {
      slow = step(slow);
      fast = step(step(fast));
      if (slow === fast) return true;
    }
  }
  return false;
}; //T:O(N^2) S:O(1) || T:O(N) S:O(N)
