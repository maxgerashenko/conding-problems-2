// https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP
// Minimum Meeting Rooms

// T:O(NlogN N^(N-1)) S:O(1)
// T:O(NlogN + N S:O(N)

class Heap {
  constructor(sort){
    this.sort = sort;
    this.arr= [];
  }
  add(val){
    this.arr.push(val);
    this.arr.sort(this.sort);
  }
  pop(){
    this.arr.shift();
  }
  getEl(){
    return this.arr[0];
  }
  getLen(){
    return this.arr.length;
  }
}

const min_meeting_rooms = function(meetings) {
  let maxCount = 0;
  meetings.sort((x,y)=> x.start - y.start);
  let minHeap = new Heap((x,y)=>x.end-y.end);
  minHeap.add(meetings.shift());
  for(meeting of meetings){
    while(minHeap.getEl() && minHeap.getEl().end <= meeting.start){
      minHeap.pop();
    }
    minHeap.add(meeting);
    maxCount = Math.max(maxCount, minHeap.getLen());
  }

  return maxCount;
}; // T:O(NlogN) S:O(N)
