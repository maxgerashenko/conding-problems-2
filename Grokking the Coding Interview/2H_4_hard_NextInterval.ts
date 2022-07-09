// https://www.educative.io/courses/grokking-the-coding-interview/gkkmqXO6zrY
//
// Next Interval

const find_next_interval = function(intervals) {
  let result = [];
  let minStarts = [...intervals.sort((x,y)=>x.start-y.start)];
  let minEnds = [...intervals.sort((x,y)=>x.end-y.end)];
  let mapIndex = new Map();
  for(let i in intervals){
    mapIndex.set(intervals[i], i);
  }
  for(let minEnd of minEnds){
    let index = mapIndex.get(minEnd);
    for(let i in minStarts){
      let minStart = minStarts[i];
      if(minEnd.end > minStart.start) continue;
      result[index] = mapIndex.get(minStart);
      break;
    }
    if(result[index] == null) {
      result[index] = -1;
    }
  }
  return result
}; // T:O(NlogN) S:O(N)
