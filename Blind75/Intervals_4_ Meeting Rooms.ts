//  Meeting Rooms
// https://www.lintcode.com/problem/920/
// https://leetcode.com/problems/meeting-rooms/

// Sort by start T:O(nlon) S:O(1)
// as it is sorted
// if start oberlaps with end 
// return false

canAttendMeetings(intervals: Interval[]): boolean {
    intervals.sort((a,b)=>a[0]-b[0]);
    let pre = -1;
    for(let {start,end} of intervals){
      if(start < pre) return false;
      pre = end;
    }

    return true;
  } // T:O(nlogn) S:O(1)
