// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/description/
// Merge Triplets to Form Target Triplet

// use greedy
// use set for good number
// filter bad triplets with any number > coresposing targer i
// find all positions when el === target[i];
// check that set.size === n
//
// T:O(N) S:O()N

function mergeTriplets(triplets: number[][], target: number[]): boolean {
  let n = target.length;
  let goodIndex = new Set();

  let filtered = [];
  for (let el of triplets) {
    let isAnyGreaterTarget = el.reduce(
      (pre, num, index) => pre || num > target[index],
      false
    );
    if (isAnyGreaterTarget) continue;
    filtered.push(el);
  }

  for (let el of filtered) {
    for (let i in el) {
      if (i in goodIndex) continue;
      if (target[i] === el[i]) {
        goodIndex.add(i);
      }
    }
  }

  return goodIndex.size === n;
} // T:O(N) S:O(N)
