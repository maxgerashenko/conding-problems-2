// https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG
// Conflicting Appointments

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

const can_attend_all_appointments = function(intervals) {
  // Has conflicts
  //
  // sort intervals by start
  // iterate
  // check overlaps
  // end < start

  // conner case
  if (intervals.length < 2) return false;

  // sort intervals
  intervals.sort((x, y) => x.start - y.start);

  for (let i = 0; i < intervals.length - 1; i++) {
    // iterate
    if (intervals[i].end >= intervals[i + 1].start) return false;
  }

  // base case
  return true;
}; // T:O(N logN + N) S:O(1)
