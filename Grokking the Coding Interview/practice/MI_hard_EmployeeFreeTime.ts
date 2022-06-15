// https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0
// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

class MinHeap {
  constructor() {
    this.array = [];
  }
  add(el) {
    this.array.push(el);
    this.array.sort((x, y) => x.start - y.start);
  }
  pop() {
    return this.array.shift();
  }
}

const find_employee_free_time = function(schedule) {
  // Find time gaps
  //
  // use advantage of the sorted parts
  // use heap min heap start time
  // add all first intervals to the heap
  // init prev iterval
  // get new iterval and compare with prev
  // if prev.end < new.start add gap
  // set new -> prev
  // take new form the heap
  // try to add new interval from the same queue
  // return all gaps

  // conner case
  if (schedule == null || schedule.length === 0) return [];

  // add first intervals
  let heap = new MinHeap();
  for (let i = 0; i < schedule.length; i++) {
    heap.add({ ...schedule[i].shift(), id: i });
  }

  // iterate
  let timeGaps = [];
  let prev = heap.pop();
  if (schedule[prev.id] && schedule[prev.id].length > 0) {
    heap.add({ ...schedule[prev.id].shift(), id: prev.id });
  }
  while (heap.array.length > 0) {
    let cur = heap.pop();

    // add gap
    if (prev.end < cur.start) {
      timeGaps.push(new Interval(prev.end, cur.start));
    }

    // update cur end
    if (prev.end >= cur.start) {
      cur.end = Math.max(cur.end, prev.end);
    }

    // add el from cur line to the heap
    if (schedule[cur.id] && schedule[cur.id].length > 0) {
      heap.add({ ...schedule[cur.id].shift() });
    }

    // update prev
    prev = cur;
  }

  return timeGaps;
}; // T: O(N log K) S:O(K), heap will not have more than K elements
