// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
//
// Subsets

// Given a set with distinct elements, find all of its distinct subsets.

const find_subsets = function (nums, subs = [[]]) {
  for (let num of nums) {
    let level = [];
    for (let sub of subs) {
      level.push(sub, [...sub, num]);
    }
    subs = [...level];
  }
  return subs;
}; // S:O(N2^N) S:O(N2^N)
