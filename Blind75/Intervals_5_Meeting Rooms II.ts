// Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// https://www.lintcode.com/problem/919

minMeetingRooms(intervals: Interval[]): number {
    let start = intervals.sort((a,b)=>a.start - b.start).map(el => el.start); // T:O(nlogn) S:O(1)
    let end = intervals.sort((a,b)=>a.end - b.end).map(el => el.end); // T:O(nlogn) S:O(1)
    let count = 0;
    let max = 0;

    let s = 0;
    let e = 0
    while(s < start.length){
      if(start[s] < end[e]) {
        count++;
        max = Math.max(max, count);
        s++;
        continue;
      }
      count--;
      e++;
    }

    return max;