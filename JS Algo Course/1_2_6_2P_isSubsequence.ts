function isSubsequence(str1, str2) {
  if (!str1) return true;

  let i = 0,
    j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length - 1) return true;
    j++;
  }

  return false;
}

// Time complexity O(M+N)
// Space complexity O(1)

// i
// hello world
//           j

console.log(isSubsequence("hello", "hello world"));
