// https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l
//
// Evaluate

const evaluate = function (str, map = {}, result = []) {
  if (map[str] != null) return map[str];
  if (!isNaN(Number(str))) return [Number(str)];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) continue;
    for (let l of evaluate(str.slice(0, i))) {
      for (let r of evaluate(str.slice(i + 1))) {
        result.push(str[i] == '+' ? l + r : str[i] == '-' ? l - r : l * r);
      }
    }
  }
  map[str] = result;
  return result;
}; // T:(N2^N) S:O(2^N)
