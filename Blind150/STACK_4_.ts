// https://leetcode.com/problems/daily-temperatures/
// Daily Temperatures

// Basic solution is O:n^2
// find next big for each n*n

// O:(n) solution
// monotilicay decreasing stack
// if smaller the top add to the stack
// if bigger then top remove from the stack
// update there index with index diff
// add bigger value to the stack
// O:(n) S:O(n)

function dailyTemperatures(temperatures: number[]): number[] {
  let len = temperatures.length;
  let res = Array(len).fill(0);
  let stack = [];

  for (let i = 0; i < len; i++) {
    let el = temperatures[i];
    while (stack.slice(-1)[0]?.val < el) {
      let { index } = stack.pop();
      res[index] = i - index;
    }
    stack.push({ index: i, val: el });
  }

  let count = 0;
  while (stack.length > 0) {
    stack.pop();
    res[len - 1 - count] = 0;
    count++;
  }

  return res;
} // T:O(N) S:O(N)
