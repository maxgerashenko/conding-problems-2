// https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN
//
// Abbreviations

const isNumber = (el) => !isNaN(Number(el));
const generate_generalized_abbreviation = function (word) {
  word = word.split('');
  let results = [[word.shift()], ['1']];

  for (let w of word) {
    let copy = [];
    for (let res of results) {
      copy.push([...res, w]); // add letter

      // add number
      let last = res.length - 1;
      if (!isNumber(res[last])) {
        copy.push([...res, '1']);
        continue;
      }

      res[last] = String(Number(res[last]) + 1);
      copy.push(res);
    }
    results = copy;
  }

  return results.map((el) => el.join(''));
}; // T:(N*2^N) S:(N*2^N)
