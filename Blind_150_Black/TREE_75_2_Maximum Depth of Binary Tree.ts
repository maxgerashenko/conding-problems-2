// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
// Maximum Depth of Binary Tree

// use DFS
// T:O(N) S:O(N)

function maxDepth(root: TreeNode | null, count = 0): number {
  if (root == null) return count;

  let { left, right } = root;

  return Math.max(maxDepth(left, count + 1), maxDepth(right, count + 1));
} // T:O(N) S:O(N)
