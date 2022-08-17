// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const search_triplets = function (
  arr,
  start = 0,
  end = arr.length,
  results = []
) {
  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i - 1]) continue;
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        results.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        while (arr[start] === arr[start - 1]) start++;
        while (arr[end] === arr[end + 1]) end--;
        continue;
      }
      if (sum < 0) start++;
      if (sum > 0) end--;
    }
  }
  return results;
}; // T:O(NlogN*N^) S:O(1)
