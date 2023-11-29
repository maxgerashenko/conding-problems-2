// https://www.lintcode.com/problem/919/
// Meeting Rooms II

// use sorted array
// use min heap
// add new meeting to array
// remove ended meeting by end time and new start time
// return max heap arr count
// 
// T:O(nlogn) S:O(n)

minMeetingRooms(intervals: Interval[]): number {

    intervals.sort((a,b)=>a.start-b.start);
    const minHeap = new Heap((a,b)=>a-b);
    let max = 0;

    for(let {start, end} of intervals){
      while(minHeap.heap.length > 0 && (minHeap.peek() as number) <= Number(start)){
        minHeap.remove();
      }

      minHeap.add(end);
      max = Math.max(max, minHeap.heap.length)
    }
    return max;
  }
} // T:O(nlogN) S:O(n)