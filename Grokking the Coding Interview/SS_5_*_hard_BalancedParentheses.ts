// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
//
// Balanced Parentheses

const generate_valid_parentheses = function (num) {
  let combs = [{ comb: ['('], openCount: num - 1, balance: 1 }];
  for (let n = 0; n < num * 2 - 1; n++) {
    let copy = [];
    for (let { comb, openCount, balance } of combs) {
      if (openCount > 0) {
        copy.push({
          comb: [...comb, '('],
          openCount: openCount - 1,
          balance: balance + 1,
        });
      }
      if (balance > 0) {
        copy.push({ comb: [...comb, ')'], openCount, balance: balance - 1 });
      }
    }
    combs = [...copy];
  }
  return combs.map((el) => el.comb.join(''));
}; // T:O(N*2^N) S:O(N*2^N)
