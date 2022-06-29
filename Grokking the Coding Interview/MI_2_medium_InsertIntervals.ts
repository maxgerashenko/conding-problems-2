// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const merge = function(intervals_a, intervals_b) {
  let result = [];
  let b = intervals_b.shift();
  for(let a of intervals_a){
    if(a.end < b.start) continue;
    while(b.end < a.start) {
      b = intervals_b.shift();
    }
    result.push(new Interval(Math.max(a.start, b.start), Math.min(a.end, b.end)));
  }
  return result;
}; // T:O(N+M) S:O(N|M)
