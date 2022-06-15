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

const circular_array_loop_exists = function(arr) {
  // Find valid cycle in Circular array
  // Valid:
  // not direction change
  // no 1 step cycle

  // Iterate array to check all steps
  // use 2 pointers as Fast and Slow ot detect cycle
  // cover conner cases in the function call

  let hashMap = {};

  function getNextIndex(step, current, length, isCycleForward) {
    // coner case for changind directin in the cycle
    let isForward = step >= 0;
    if (isForward !== isCycleForward) return -1;

    // memoization
    let key = `${step}, ${current}`;
    if (key in hashMap) return hashMap[key];

    // next index
    let next = current + step;

    // conves positive and negative circulation
    next = next > 0 ? next % length : (next % length) + length;

    // conner case for 1 step cycle
    if (next === current) {
      hashMap[key] = -1;
      return -1;
    }

    // base case
    hashMap[key] = next;
    return next;
  }

  let { length } = arr;
  for (let i = 0; i < arr.length; i++) {
    let slow = i;
    let fast = i;
    let isForward = arr[i] >= 0;

    while (true) {
      slow = getNextIndex(arr[slow], slow, length, isForward);
      let tmp = getNextIndex(arr[fast], fast, length, isForward);
      fast = getNextIndex(arr[tmp], tmp, length, isForward);

      // conner cases
      if (slow == -1 || tmp == -1 || fast == -1) break;

      // base case
      if (slow == fast) return true;
    }
  }

  return false;
}; // T:O(N^2),S:O(1) or T:O(N),S:O(N)
