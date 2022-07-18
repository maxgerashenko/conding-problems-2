// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
//
// Balanced Parentheses

const generate_valid_parentheses = function (
  num,
  results = [{ countdown: num - 1, openCount: 1, str: '(' }]
) {
  while (true) {
    let level = [];
    for (let { countdown, openCount, str } of results) {
      if (countdown > 0)
        level.push({
          str: str + '(',
          countdown: countdown - 1,
          openCount: openCount + 1,
        });
      if (openCount > 0)
        level.push({ str: str + ')', countdown, openCount: openCount - 1 });
    }
    if (level.length === 0) return results.map((el) => el.str);
    results = [...level];
  }
}; // T:O(N2^N) S:O(N2^N)
