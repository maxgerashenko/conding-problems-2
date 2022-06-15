// https://leetcode.com/problems/balanced-binary-tree/
// Balanced Binary Tree

var isBalanced = function(root) {
  // Algorithm
  // Use recurtion to vitit all nodes
  // return null if sub tree is unbalanced
  // Return the max height if it unbelanced
  // Unbalenced means that the diffrence between
  // lef and right is more than 1

  const step = node => {
    // base case
    if (!node) return 0;

    let { left, right } = node,
      l_count = step(left),
      r_count = step(right);

    // cases
    if (l_count == null || r_count == null) return null;
    if (Math.abs(l_count - r_count) > 1) return null;

    // return value
    return Math.max(l_count, r_count) + 1;
  };

  return step(root) !== null;
}; // O(n)
