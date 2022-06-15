function findLongestSubstring(str) {
  if (!str) return 0;
  let max = 0,
    start = 0;
  let counter = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (counter[char]) {
      start = Math.max(counter[char], start);
    }
    max = Math.max(max, i - start + 1);
    counter[char] = i + 1;
  }
  return max;
}

// start = 5;

// counter
// this
// 0145

// tmp = 5-5+1 = 1;
// max = 4;

// thisisawesome
// 0123456789111
//           012
//      i
