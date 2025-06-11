// https://leetcode.com/problems/insert-interval/description/
// Insert Interval

// use insert interval
// exeptions intervals is []
// 3 parts
// i.end < start, just add to res[]
// merge start = min(i.start, nStart), end = max(end, i.end)
// add the rest
// return res
//
// T:O(nLogN) S:O(n)

function insert(intervals: number[][], insert: number[]): number[][] {
  let [nStart, nEnd] = insert;
  if (insert == null || insert.length == 0) return intervals; // conner case
  if (intervals.length === 0) return [insert]; // conner case

  const res = [];
  let n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);

  let index = 0;
  while (index < n && intervals[index][1] < nStart) {
    res.push(intervals[index]);
    index++;
  }

  if (index < n) {
    nStart = Math.min(nStart, intervals[index][0]);
  }

  while (index < n && nEnd >= intervals[index][0]) {
    nEnd = Math.max(nEnd, intervals[index][1]);
    index++;
  }

  res.push([nStart, nEnd]);
  res.push(...intervals.slice(index));

  return res;
} // T:O(NlogN) S:O(N)
