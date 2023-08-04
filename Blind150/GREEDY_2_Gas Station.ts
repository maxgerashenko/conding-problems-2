// https://leetcode.com/problems/gas-station/description/
// Gas Station

// use Greedy
// exclude conner case, when not exist
// when solution exist do O(n)
// try start 0,
// udate start when total < 0
// use for i
//
// Brute Force T:O(n^2) each for each
// T:O(n) S:O(1)

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let start = 0;
  let n = gas.length;
  let total = 0;

  if (
    gas.reduce((pre, el) => pre + el, 0) < cost.reduce((pre, el) => pre + el, 0)
  )
    return -1; // coner case, solution doesn't exist

  // solution exist
  for (let i = 0; i < n; i++) {
    total += gas[i] - cost[i];

    if (total >= 0) continue; // bad start
    start = i + 1; // try next
    total = 0; // reset total
  }

  return start;
} // T:O(n) S:O(1)
