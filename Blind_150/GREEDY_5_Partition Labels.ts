// https://leetcode.com/problems/partition-labels/description/
// Partition Labels

// use Greedy
// use hashMapLastIndex
// use for
// use size to AVOID end - start + 1
// update lastIndex every time with Math.max(lastIndex, hashMapLastIndex[el])
// base case when lastIndex === current index
// T:O(n) S:O(26)
// T:O(n) S:O(1)

function partitionLabels(s: string): number[] {
  let hashMapLastIndex = {};
  let n = s.length;
  let res = [];

  for (let i = 0; i < n; i++) hashMapLastIndex[s[i]] = i;

  let index = 0;
  let lastIndex = hashMapLastIndex[s[0]];
  let size = 0;
  for (let i = 0; i < n; i++) {
    size++;
    lastIndex = Math.max(lastIndex, hashMapLastIndex[s[i]]);
    if (i === lastIndex) {
      res.push(size);
      size = 0;
    } // base case
  }

  return res;
} // T:O(N) S:O(1)
