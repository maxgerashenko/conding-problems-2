// https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP
// Minimum Meeting Rooms

// T:O(NlogN N^(N-1)) S:O(1)
// T:O(NlogN + N S:O(N)

class Heap {
  constructor(isMax = false) {
    this.isMax = isMax;
    this.arr = [];
  }
  add(el) {
    this.arr.push(el);
    this.arr.sort((x, y) => (!this.isMax ? x.end - y.end : y.end - x.end));
  }
  getEl() {
    return this.arr[0];
  }
  pop() {
    return this.arr.shift();
  }
  getLength() {
    return this.arr.length;
  }
}

const min_meeting_rooms = function (meetings) {
  meetings.sort((x, y) => x.start - y.start);
  let maxCount = 1;
  let minHeap = new Heap();
  minHeap.add(meetings.shift());
  for (let meeting of meetings) {
    while (minHeap.getEl() && minHeap.getEl().end <= meeting.start) {
      minHeap.pop();
    }
    minHeap.add(meeting);
    maxCount = Math.max(maxCount, minHeap.getLength());
  }

  return maxCount;
}; // T:O(NLogN) S:O(1) | T:O(NlogN N*(N-1) S:O(1)
