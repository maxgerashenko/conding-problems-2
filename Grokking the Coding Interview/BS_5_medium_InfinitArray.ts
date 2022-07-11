// https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2
//
// Search in a Sorted Infinite Array

const search_in_infinite_array = function(reader, key) {
  let start = 0;
  let end = 1;
  while(key > reader.get(end)) {
    let tmp = end;
    end = (end-start+1) * 2;
    start = tmp+1;
  }
  while(start <= end){
    let mid = Math.floor(end/2+start/2);
    if(reader.get(mid) === key) return mid;
    if(key > reader.get(mid)) {
      start = mid+1;
      continue;
    }
    end = mid-1;
  }
  return -1;
}; // T:O(logN) S:O(1)
