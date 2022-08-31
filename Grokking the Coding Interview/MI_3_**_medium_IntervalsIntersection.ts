// https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
// Intervals Intersection

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

const merge = function (intA, intB, results = [], i = (j = 0)) {
  while (i < intA.length && j < intB.length) {
    let a = intA[i];
    let b = intB[j];
    let isAinB = a.start <= b.start && a.end >= b.start;
    let isBinA = b.start <= a.start && b.end >= a.start;
    if (isAinB || isBinA) {
      let start = Math.max(a.start, b.start);
      let end = Math.min(a.end, b.end);
      results.push(new Interval(start, end));
    }
    if (a.end < b.end) {
      i++;
      continue;
    }
    j++;
  }
  return results;
}; // T:O(N) S:(N)
