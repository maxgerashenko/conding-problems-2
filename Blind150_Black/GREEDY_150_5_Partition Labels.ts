// https://leetcode.com/problems/partition-labels/
// Partition Labels

// use greedy
// use hashMapIndex
// iterate string
// mark start and update end
// if i === end record length
// then update start
// untill the end
//
// T:O(N) S:O(N)

function partitionLabels(srt: string): number[] {
  const n = srt.length;
  let strArr = srt.split('');
  let lastIndexMap = {};
  const res = [];

  for (let i in strArr) {
    let el = strArr[i];
    lastIndexMap[el] = Number(i);
  } // init hashMap

  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    let el = srt[i];
    end = Math.max(end, lastIndexMap[el]);
    if (i === end) {
      res.push(end + 1 - start);
      start = end + 1;
    }
  } // T:O(N)

  return res;
} // T:O(n) S:O(n)
