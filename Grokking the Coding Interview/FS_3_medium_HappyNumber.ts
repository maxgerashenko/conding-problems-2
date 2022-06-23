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

const next = (number) =>
  String(number)
    .split('')
    .map((num) => Math.pow(+num, 2))
    .reduce((res, num) => res + num, 0);

const find_happy_number = function (num) {
  let slow = num;
  let fast = num;
  while (slow !== 1) {
    slow = next(slow);
    fast = next(next(fast));
    if (slow !== 1 && slow == fast) return false;
  }

  return true;
}; // T:O(LogN) S:O(1)
