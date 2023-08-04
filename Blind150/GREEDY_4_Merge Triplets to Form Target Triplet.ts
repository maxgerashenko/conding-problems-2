// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
// Merge Triplets to Form Target Triplet

// use Greedy
// use invert logic
// if when need to merge let's exclude all the can't be merged
// and from the rest there should be something to merge
// use Set(i) to track the positions that were good to merge
// for all sets check 1) and 2)
// return Set.length === pattern.length as all index position are good
// T:O(n*k) S:O(k)
// T:O(n) S:O(1)

function mergeTriplets(triplets: number[][], target: number[]): boolean {
  let m = target.length;
  let mergeIndexBool = new Set();

  for (let el of triplets) {
    let isBreak = false;
    if (el[0] > target[0] || el[1] > target[1] || el[2] > target[2]) continue; // ignore if any triplet[i] > target[i]

    for (let i = 0; i < m; i++) {
      if (el[i] != target[i]) continue; // base case
      mergeIndexBool.add(i);
    }
  }

  return mergeIndexBool.size === m;
} // T:O(n*k) S:O(k) k - constant
//  T:O(n) S:O(1)
