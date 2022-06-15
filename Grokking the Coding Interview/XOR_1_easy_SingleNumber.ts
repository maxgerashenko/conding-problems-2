// https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG#Solution-with-XOR
//
// Single Number

function find_single_number(arr) {
  let xor = 0;
  for (let el of arr) {
    xor = xor ^ el;
  }

  return xor === 0 ? -1 : xor;
} // T:O(n) S:(1)

function find_single_number(arr) {
  return arr.reduce((pre, el) => (pre ^= el), 0) || -1;
} // T:O(N) S:O(1)
