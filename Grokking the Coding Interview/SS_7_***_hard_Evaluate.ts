// https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l
//
// Evaluate

const evaluate = function (input, map = {}, results = []) {
  if (map[input] != null) return map[input]; // hasMap
  if (!isNaN(input)) return [Number(input)]; // base case
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) continue;
    let leftOptions = evaluate(input.substring(0, i), map);
    let rightOptions = evaluate(input.substring(i + 1), map);
    for (let l of leftOptions) {
      for (let r of rightOptions) {
        results.push(
          input[i] === '+' ? l + r : input[i] === '-' ? l - r : l * r
        );
      }
    }
  }
  map[input] = results; // hasMap
  return results;
}; // T:O(N2^N) T:O(2^N)
