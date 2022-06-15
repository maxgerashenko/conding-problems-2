// https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
//
// Permutations

const find_permutations = function (nums) {
  let results = [[nums.shift()]];

  for (let n of nums) {
    let copy = [];
    for (let res of results) {
      // covers right coner case
      for (let r = 0; r <= res.length; r++) {
        let left = res.slice(0, r); // [)
        let right = res.slice(r);
        copy.push([...left, n, ...right]);
      }
    }
    results = copy;
  }

  return results;
}; // T:(N*!N), N insert to the array  S:O(N*!N) !N mutations * each contain N elements
