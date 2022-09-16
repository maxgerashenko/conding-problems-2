// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
//
// Subsets

// Given a set with distinct elements, find all of its distinct subsets.

const find_subsets = function (nums, subsets = [[]]) {
  while (nums.length) {
    let num = nums.pop();
    let tmp = [];
    for (let el of subsets) tmp.push([...el, num]);
    subsets.push(...tmp);
  }
  return subsets;
}; // T:O(N*2^N) S:O(N*2^N)
