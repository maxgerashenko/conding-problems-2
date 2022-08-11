// https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM
// Happy Number

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// take number
// split to digits
// get squared
// create new node point to the new node
// use 2 pointers from 1 side
// fast and slow
// if fast is 1 it ißs happy number
// if fast === slow it is cycle

let step = (number) =>
  String(number)
    .split('')
    .reduce((pre, el) => pre + Math.pow(el, 2), 0);
const find_happy_number = function (num) {
  let slow = step(num);
  let fast = step(step(num));
  while (slow !== fast) {
    if (fast === 1) return true;
    slow = step(slow);
    fast = step(step(fast));
  }
  return false;
}; // T:O(N) S:O(1)
