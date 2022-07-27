// https://www.educative.io/courses/grokking-the-coding-interview/gxZz615BPPG
//
// Frequency Sort

function sort_character_by_frequency(str, hashMapCount = {}) {
  for (let s of str) {
    if (hashMapCount[s] == null) hashMapCount[s] = 0;
    hashMapCount[s]++;
  }
  return Object.keys(hashMapCount)
    .map((key) => ({ key, count: hashMapCount[key] }))
    .sort((x, y) => y.count - x.count)
    .reduce((pre, { key, count }) => pre + Array(count).fill(key).join(''), '');
} // T:O(LlogL) S:O(N)
