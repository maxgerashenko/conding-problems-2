// https://leetcode.com/problems/koko-eating-bananas/description/
// Koko Eating Bananas

// brootforce esitmate is always O(N)
// Optimize search with BS
// 1 < res < maxVal
// h estimate time
// response k chanks

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let resMIN = Number.MAX_SAFE_INTEGER;

  function estimateTimeToEat(k) {
    let res = 0;
    for (let el of piles) {
      res += Math.ceil(el / k);
    }
    return res;
  }

  while (left <= right) {
    let pivot = left + ~~(right / 2 - left / 2);

    let estimate = estimateTimeToEat(pivot);
    if (estimate > h) {
      left = pivot + 1;
      continue;
    }

    resMIN = pivot;
    right = pivot - 1;
  }

  return resMIN;
} // T:O(log(maxVla)*n) S:(1) ex S:O(n) existring
