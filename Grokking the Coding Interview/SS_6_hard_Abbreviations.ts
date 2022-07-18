// https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN
//
// Abbreviations

const generate_generalized_abbreviation = function (word) {
  let results = [
    { str: [1], count: 1 },
    { str: word[0], count: 0 },
  ];
  for (let letter of word.slice(1)) {
    let level = [];
    for (let { str, count } of results) {
      level.push({ str: [...str, letter], count: 0 });
      if (count === 0) {
        level.push({ str: [...str, 1], count: 1 });
        continue;
      }
      str[str.length - 1] = count + 1;
      level.push({ str, count: count + 1 });
    }
    results = level;
  }
  return results.map((el) => el.str.join(''));
}; // T:(N2^N) S:(N2^N)
