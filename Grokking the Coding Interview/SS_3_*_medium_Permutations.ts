// https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
//
// Permutations

const find_permutations = function (nums) {
  let result = [[nums.shift()]];
  for (let num of nums) {
    let copy = [];
    for (let res of result) {
      // covers right coner case
      for (let i = 0; i <= res.length; i++) {
        copy.push([...res.slice(0, i), num, ...res.slice(i)]);
      }
      result = copy;
    }
  }
  return result;
}; // T:(N*!N), N insert to the array  S:O(N*!N) !N mutations * each contain N elements
