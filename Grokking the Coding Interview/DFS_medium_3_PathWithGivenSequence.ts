// https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn
//
// Path ith Given Sequence

const find_path = function (node, sequence = []) {
  // base case
  if (!node && sequence && sequence.length === 0) return true;

  // conner case
  if (!node) return false;

  let { left, right, value } = node;
  let el = sequence.shift();

  if (value !== el) return false;

  return find_path(left, sequence) || find_path(right, sequence);
}; // T:O(n) S:O(n) - worse case for linked list call stack
