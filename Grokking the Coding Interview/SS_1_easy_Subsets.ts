// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
//
// Subsets

// Given a set with distinct elements, find all of its distinct subsets.

const find_subsets = function (nums) {
  const subsets = [[]];

  for (let num of nums) {
    let copy = [];
    for (let sub of subsets) {
      copy.push([...sub, num]);
    }
    subsets.push(...copy);
  }

  return subsets;
}; // T:O(N*2^N) S:O(N*2^N)
