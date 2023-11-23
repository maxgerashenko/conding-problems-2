// https://leetcode.com/problems/gas-station/description/
// Gas Station

// use greedy
// 1 check that there is a solution
// tatal diff >= 0;
// iterate array and get cur += diff
// if cur < 0 can't be a start
// then reset start to i
// if there is a solution return start
//
// T:O(n) S:O(1)

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let n = gas.length;
  let cur = 0;
  let start = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (cur < 0) {
      start = i;
      cur = 0;
    }
    let diff = gas[i] - cost[i];
    cur += diff;
    total += diff;
  }
  return total >= 0 ? start : -1;
} // T:O(n) S:O(1)
