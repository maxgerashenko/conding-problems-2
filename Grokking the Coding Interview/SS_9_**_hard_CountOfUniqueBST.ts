// https://www.educative.io/courses/grokking-the-coding-interview/gx6BMKoWqR9
//
// Count of Structurally Unique Binary Search Trees

const count_trees = function (end, start = 0, hashMap = new Map(), count = 0) {
  if (hashMap.has([start, end])) return hashMap.get([start, end]);
  if (end - start <= 1) return 1; // conner case
  for (let i = start; i < end; i++) {
    let leftCount = count_trees(i, start);
    let rightCount = count_trees(end, i + 1);
    count += leftCount * rightCount;
  }
  hashMap.set([start, end], count);
  return count;
}; // T:O(N 2^N) S:O(N 2^N)

const count_trees = function (n, hashMap = {}, count = 0) {
  // if(hashMap[n] != null) return hashMap[n];
  if (n === 0) return 1; // conner case
  for (let i = 1; i <= n; i++) {
    let leftCount = count_trees(i - 1, hashMap);
    let rightCount = count_trees(n - i, hashMap);
    count += leftCount * rightCount;
  }
  hashMap[n] = count;
  return count;
}; // T:O(N 2^N) S:O(N 2^N) memoization is T:O(N^2) S:O(N)
