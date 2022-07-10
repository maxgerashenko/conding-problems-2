// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
//
// Balanced Parentheses

const generate_valid_parentheses = function (num) {
  let combs = [{ comb: '(', open: num - 1, bal: 1 }];
  for (let n = 1; n < num * 2; n++) {
    let copy = [];
    for (let { comb, open, bal } of combs) {
      if (open > 0)
        copy.push({ comb: comb + '(', open: open - 1, bal: bal + 1 });
      if (bal > 0) copy.push({ comb: comb + ')', open, bal: bal - 1 });
    }
    combs = copy;
  }
  return combs.map((el) => el.comb);
}; //T:O(N*2^N) S:O(N*2^N)
