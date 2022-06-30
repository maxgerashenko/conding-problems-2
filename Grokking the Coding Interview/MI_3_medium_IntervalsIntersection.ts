// https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
// Intervals Intersection

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

const merge = function (intervals_a, intervals_b) {
  // intersections

  // intervals are sorted
  // iterate intervals
  // find intersection and add intersection
  // move interval by small start

  // conner case
  if (intervals_a.length === 0 || intervals_b.length === 0) return [];

  const intersections = [];
  let i = 0;
  let j = 0;
  while (i < intervals_a.length && j < intervals_b.length) {
    let isAOverlapsB =
      intervals_a[i].start <= intervals_b[j].start &&
      intervals_b[j].start <= intervals_a[i].end;
    let isBOverlapsA =
      intervals_b[j].start <= intervals_a[i].start &&
      intervals_a[i].start <= intervals_b[j].end;

    if (isAOverlapsB || isBOverlapsA) {
      let start = Math.max(intervals_a[i].start, intervals_b[j].start);
      let end = Math.min(intervals_a[i].end, intervals_b[j].end);
      intersections.push(new Interval(start, end));
    }

    if (intervals_a[i].end < intervals_b[j].end) {
      i++;
      continue;
    }
    j++;
  }

  return intersections;
}; // T:O(N) S:O(1)
