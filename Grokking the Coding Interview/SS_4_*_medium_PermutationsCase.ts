// https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
//
// String Permutations by changing case

function stringPermutations(str, results = ['']) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let level = [];
    for (let res of results) {
      level.push(res + char);
      if (!isNaN(char)) continue;
      char =
        char.toUpperCase() != char ? char.toUpperCase() : char.toLowerCase();
      level.push(res + char);
    }
    results = [...level];
  }
  return results;
} // T:O(N2^N) S:O(N2^N)
