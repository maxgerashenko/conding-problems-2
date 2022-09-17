// https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
//
// String Permutations by changing case

const find_letter_case_string_permutations = function (str, results = ['']) {
  for (let el of str) {
    let level = [];
    for (let option of results) {
      if (!isNaN(Number(el))) {
        level.push(option + el);
        continue;
      }
      level.push(option + el.toLowerCase());
      level.push(option + el.toUpperCase());
    }
    results = level;
  }
  return results;
}; // T:O(N*2^N) S:O(2^N)
