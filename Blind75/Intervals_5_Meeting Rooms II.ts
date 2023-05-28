// Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// https://www.lintcode.com/problem/919

// 2 arrays, like heap but simpler
// sort by start and map to start
// sort by end and map to end
// iterating all start array, is enought
// move start when owerlap
// move end when Not
// T:O(NlongN) S:O(N)

function minMeetingRooms(intervals: Interval[]): number {
  let start = intervals.sort((a, b) => a.start - b.start).map((el) => el.start); // T:O(nlogn) S:O(1)
  let end = intervals.sort((a, b) => a.end - b.end).map((el) => el.end); // T:O(nlogn) S:O(1)
  let count = 0;
  let max = 0;

  let s = 0;
  let e = 0;
  while (s < start.length) {
    if (start[s] < end[e]) {
      count++;
      max = Math.max(max, count);
      s++;
      continue;
    }
    count--;
    e++;
  }

  return max;
} // T:O(NlongN) S:O(N)
