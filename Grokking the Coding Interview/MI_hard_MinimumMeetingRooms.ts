// https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP
// Minimum Meeting Rooms

class HeapMin {
  constructor() {
    this.array = [];
  }

  add(val) {
    this.array.push(val);
    this.array.sort((x, y) => x - y);
  }

  getMin() {
    return this.array[0];
  }

  removeMin() {
    this.array.shift();
  }
}

const min_meeting_rooms = function(meetings) {
  // Min rooms required
  //
  // sort array
  // iterate array
  // add end of meeting
  // while start of meeting < min end, rooms ++
  // add room
  // update rooms max
  // return room max

  // conner case
  if (meetings.length < 2) return meetings.length;

  // sort by start
  meetings.sort((x, y) => x.start - y.start);

  let roomsCountMax = 0;
  let roomsCount = 0;
  let heap = new HeapMin();
  heap.add(Infinity);
  for (let el of meetings) {
    let { start, end } = el;

    let lastEnd = heap.getMin();

    // remove meetings and rooms
    while (lastEnd <= start) {
      heap.removeMin();
      roomsCount--;
      lastEnd = heap.getMin();
    }

    // add rooms
    heap.add(end);
    roomsCount++;
    // update rooms
    roomsCountMax = Math.max(roomsCountMax, roomsCount);
  }

  // return max count
  return roomsCountMax;
}; // T:O(N log N + N + N-1) S:O(N)
