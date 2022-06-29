// https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG
// Conflicting Appointments

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

const can_attend_all_appointments = function (intervals) {
  intervals.sort((x, y) => x.start - y.start);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= intervals[i - 1].end) return false;
  }
  return true;
}; // T:O(NlogN + N) S:O(N)
