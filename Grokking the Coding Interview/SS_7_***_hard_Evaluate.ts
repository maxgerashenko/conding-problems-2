// https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l
//
// Evaluate

const isNumber = (char) => !isNaN(Number(char));
const map = {};
const expression = function (input) {
  if (map[input]) return map[input];
  if (isNumber(input)) return [Number(input)]; // base case
  let results = [];
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (isNumber(char)) continue;
    let left = expression(input.substring(0, i)); // [)
    let right = expression(input.substring(i + 1));
    for (let l of left) {
      for (let r of right) {
        if (char === '+') results.push(l + r);
        if (char === '-') results.push(l - r);
        if (char === '*') results.push(l * r);
      }
    }
  }
  map[input] = [...results];
  return results;
}; // T:O(N*2^N) S:O(2^N) recursion n^4/Vn
