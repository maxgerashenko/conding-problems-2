// https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM
// Happy Number

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
  // take number
  // split to digits
  // get squared
  // create new node point to the new node
  // use 2 pointers from 1 side
  // fast and slow
  // if fast is 1 it is happy number
  // if fast === slow it is cycle

  let fast = num;
  let slow = num;

  let step = num => {
    let sum = 0;
    while (num !== 0) {
      let digit = num % 10;
      sum += Math.pow(digit, 2);
      num = Math.floor(num / 10);
    }

    return sum;
  };

  // iterate fast and slow pointers
  while (true) {
    slow = step(slow);
    fast = step(fast);
    fast = step(fast);

    // stop if pointers are equal
    if (slow === fast) break;
  }

  // check if pointers equals 1, then it is a happy number
  return fast === 1;
}; // O(logN)
