// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
// Pseudo-Palindromic Paths in a Binary Tree

// Doesn't works
var pseudoPalindromicPaths = function(root) {
  // Algorithm
  // Use DFS
  // Buld paths
  // Check if it is pseudo palendromic

  if (!root) return 0;

  const isPsPalidromic = path => {
    let hashMap = Array(10).fill(0);
    for (let el of path) {
      hashMap[el]++;
    }

    let counter = 0;
    for (let el of hashMap) {
      el % 2 && counter++;

      if (counter > 1) return false;
    }

    return true;
  };

  let count = 0;
  let stack = [{ node: root, path: [] }];
  while (stack.length) {
    let { node, path } = stack.pop();

    let { val, left, right } = node;
    left && stack.push({ node: left, path: [...path, val] });
    right && stack.push({ node: right, path: [...path, val] });

    if (!left && !right) {
      isPsPalidromic([...path, val]) && count++;
    }
  }

  return count;
};
