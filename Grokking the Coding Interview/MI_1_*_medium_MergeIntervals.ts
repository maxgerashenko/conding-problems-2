// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
// Merge Intervals

const merge = function(intervals) {
  intervals.sort((x,y)=>x.start - y.start);
  let result = [];
  let start = intervals[0].start;
  let preMaxEnd = intervals[0].end;
  for(let i=1;i<intervals.length;i++) {
    if(preMaxEnd < intervals[i].start){
      result.push(new Interval(start, preMaxEnd));
      start = intervals[i].start;
      preMaxEnd = intervals[i].end;
      continue;
    }
    preMaxEnd = Math.max(preMaxEnd, intervals[i].end);
  }
  result.push(new Interval(start, preMaxEnd));
  return result;
}; // T:O(NlogN) S:O(N)
