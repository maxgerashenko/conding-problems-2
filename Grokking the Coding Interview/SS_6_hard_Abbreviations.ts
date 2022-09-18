// https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN
//
// Abbreviations

const generate_generalized_abbreviation = function (word, results = [[]]) {
  for (let char of word) {
    let level = [];
    for (let substring of results) {
      level.push([...substring, { char }]);
      if (!substring.length) {
        level.push([{ count: 1 }]);
        continue;
      } // coner case
      const lastIndex = substring.length - 1;
      const count = substring[lastIndex].count;
      if (!count) {
        level.push([...substring, { count: 1 }]);
        continue;
      }
      substring[lastIndex].count++;
      level.push(substring);
    }
    results = level;
  }
  return results.map((el) =>
    el.map(({ char, count }) => (count ? count : char)).join('')
  );
}; // T:O(N*2^N) S:O(2^N)
