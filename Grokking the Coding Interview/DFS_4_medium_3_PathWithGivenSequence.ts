// https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn
//
// Path ith Given Sequence

const find_path = function ({ value, left, right }, sequence) {
  let nextVal = sequence.shift();
  if (value !== nextVal) return false;
  if (!left && !right) return true;
  return (
    (left && find_path(left, [...sequence])) ||
    (right && find_path(right, [...sequence]))
  );
}; // T:O(N) S:O(N) call stack
