// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
//
// Balanced Parentheses

const generate_valid_parentheses = function (num) {
  let results = [{ str: '(', open: 1, balance: 1 }];
  for (let i = 0; i < num * 2 - 1; i++) {
    let copy = [];
    for (let res of results) {
      const { str, open, balance } = res;
      if (open < num)
        copy.push({ str: str + '(', open: open + 1, balance: balance + 1 });
      if (balance > 0)
        copy.push({ str: str + ')', open: open, balance: balance - 1 });
    }
    results = copy;
  }

  return results.map(({ str }) => str);
}; // T:(N*2^N) S:(N*2*N)
