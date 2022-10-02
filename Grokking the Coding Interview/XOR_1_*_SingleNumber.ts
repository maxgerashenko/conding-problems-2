// https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG#Solution-with-XOR
//
// Single Number

function find_single_number(arr) {
  return arr.reduce((pre, cur) => (pre ^= cur), 0);
} // T:O(N) S:O(1)
