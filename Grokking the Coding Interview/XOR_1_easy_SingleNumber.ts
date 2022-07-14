// https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG#Solution-with-XOR
//
// Single Number

const find_single_number = (arr) => arr.reduce((pre, el) => pre ^ el, 0); // T:O(N) S:O(1)
