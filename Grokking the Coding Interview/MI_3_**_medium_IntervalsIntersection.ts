// https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
// Intervals Intersection

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

const merge = function (intervalsA, intervalsB, results = [], i = 0, j = 0) {
  while (i < intervalsA.length && j < intervalsB.length) {
    let isAinB =
      intervalsA[i].start <= intervalsB[j].start &&
      intervalsA[i].end >= intervalsB[j].start;
    let isBinA =
      intervalsB[j].start <= intervalsA[i].start &&
      intervalsB[j].end >= intervalsA[i].start;

    if (isAinB || isBinA) {
      let start = Math.max(intervalsA[i].start, intervalsB[j].start);
      let end = Math.min(intervalsA[i].end, intervalsB[j].end);
      results.push(new Interval(start, end));
    }
    if (intervalsA[i].end < intervalsB[j].end) {
      i++;
      continue;
    }
    j++;
  }
  return results;
}; // T:O(N) S:O(N)
