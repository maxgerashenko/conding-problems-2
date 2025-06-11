// https://leetcode.com/problems/gas-station/description/
// 
// Gas Station

// if sum of diff < 0 return false
// if count < 0 reset the start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let len = gas.length;
  let net = gas.map((el, index) => el - cost[index]);

  let sum = net.reduce((sum, el) => el + sum, 0);
  if (sum < 0) return -1;

  let start = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    count += net[i];
    if (count < 0) {
      start = i + 1;
      count = 0;
    }
  }

  return start;
} // T:(n) S:O(1)

