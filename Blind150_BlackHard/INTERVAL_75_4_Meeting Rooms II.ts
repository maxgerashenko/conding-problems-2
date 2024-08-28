// https://leetcode.com/problems/merge-intervals/
//
// Meeting Rooms II

export class Solution {
  minMeetingRooms(intervals: Interval[], max = 0): number {
    const minHeap = new Heap(); // sort by end
    intervals.sort(({ start: startA }, { start: startB }) => startA - startB); // sort by startƒ

    for (let i = 0; i < intervals.length; i++) {
      // convert
      let { start: curStart, end: currentEnd } = intervals[i];
      while (minHeap.heap.length > 0 && minHeap.peek() <= curStart)
        minHeap.remove(); // clean expired

      minHeap.add(currentEnd);
      max = Math.max(max, minHeap.heap.length);
    } // time line

    return max;
  }
} // T:O(nlogn) S:O(n)
