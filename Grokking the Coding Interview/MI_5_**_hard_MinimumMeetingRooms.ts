// https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP
// Minimum Meeting Rooms

// T:O(NlogN N^(N-1)) S:O(1)
// T:O(NlogN + N S:O(N)

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
    this.arr.sort(this.sort);
  }
  pop() {
    this.arr.shift();
  }
}
const min_meeting_rooms = function (
  meetings,
  minHeap = new Heap((x, y) => x.end - y.end),
  maxRooms = 0
) {
  meetings.sort((x, y) => x.start - y.start);
  for (let meeting of meetings) {
    while (minHeap.arr.length > 0) {
      // console.log(minHeap.arr[0], minHeap.arr[0].end, meetings[i].start, minHeap.arr.length)
      if (minHeap.arr[0].end > meeting.start) break;
      minHeap.pop();
    }
    minHeap.push(meeting);
    maxRooms = Math.max(maxRooms, minHeap.arr.length);
  }
  return maxRooms;
}; // T:O(NlogN+N) S:O(N)
