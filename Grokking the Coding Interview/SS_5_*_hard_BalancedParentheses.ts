// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
//
// Balanced Parentheses

const generate_valid_parentheses = function (
  num,
  results = [{ str: '(', openCount: 1, total: 1 }]
) {
  for (let i = 1; i < num * 2; i++) {
    let level = [];
    for (let { str, openCount, total } of results) {
      if (total < num)
        level.push({
          str: str + '(',
          openCount: openCount + 1,
          total: total + 1,
        });
      if (openCount > 0)
        level.push({ str: str + ')', openCount: openCount - 1, total });
    }
    results = level;
  }
  return results.map(({ str }) => str);
}; // T:O(N*2^N) S:O(2^N)
