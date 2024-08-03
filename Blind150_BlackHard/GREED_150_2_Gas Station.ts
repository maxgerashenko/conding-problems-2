// Gas Station
//
// https://leetcode.com/problems/gas-station/description/

// if sum < 0 ther is no solution
// the solution is only one
// don't have to check other index only first
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let diff = gas.map((gas, i) => gas - cost[i]);
  let len = diff.length;

  let sum = diff.reduce((pre, el) => pre + el, 0);

  if (sum < 0) return -1;

  let total = 0;
  let start = 0;
  for (let i = 0; i < len; i++) {
    if (total < 0) {
      total = 0;
      start = i;
    }
    total += diff[i];
  }

  return start;
} // T: O(n) S: O(1)
