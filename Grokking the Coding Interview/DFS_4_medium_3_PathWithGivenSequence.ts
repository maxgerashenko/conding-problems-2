// https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn
//
// Path ith Given Sequence

const find_path = function ({ value, left, right }, sequence) {
  let seq = [...sequence];
  if (seq.shift() !== value) return false;
  if (!left && !right) return true;
  return (left && find_path(left, seq)) || (right && find_path(right, seq));
}; // T:O(N) S:(N) - worse case for linked list call stack
