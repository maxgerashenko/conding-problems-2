// https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l
//
// Evaluate

const diff_eval = function (input, hashMap = {}, results = []) {
  if (hashMap[input] != null) return hashMap[input];
  if (!isNaN(Number(input))) return [Number(input)]; // base case
  for (let i = 0; i < input.length; i++) {
    if (isNaN(Number(input[i]))) {
      const left = diff_eval(input.slice(0, i), hashMap);
      const right = diff_eval(input.slice(i + 1), hashMap);
      for (let l of left)
        for (let r of right)
          switch (input[i]) {
            case '+':
              results.push(l + r);
              break;
            case '-':
              results.push(l - r);
              break;
            case '*':
              results.push(l * r);
              break;
          }
    }
  }
  hashMap[input] = results;
  return results;
}; // exponential complexity T:O(N*2^N) S:O(2^N)
