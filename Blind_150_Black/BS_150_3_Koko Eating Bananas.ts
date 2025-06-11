// https://leetcode.com/problems/koko-eating-bananas/
// Koko Eating Bananas

// use BS
// calculate hours
// left = 1, right = max of array
// while l < r
// return l

var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  let res = right;
  while (left < right) {
    let pivot = ~~(left / 2 + right / 2);

    let count = 0;
    for (let el of piles) {
      count += Math.ceil(el / pivot);
    }
    if (count > h) {
      left = pivot + 1;
      continue;
    }
    res = Math.min(res, pivot);
    right = pivot;
  }

  return right;
}; // T:O(nlog) S:O(1)
