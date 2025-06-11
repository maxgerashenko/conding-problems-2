// https://leetcode.com/problems/diameter-of-binary-tree/submissions/
// Diameter of Binary Tree

// DFS
// Same sum of max path
// for path take left + right (edje only)
// for return 1 + max(left, right)
// T:O(n) S:O(n)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  function dfs(root) {
    if (root == null) return 0;
    let { left, right } = root;
    let leftPath = dfs(left);
    let rightPath = dfs(right);
    max = Math.max(max, leftPath + rightPath);
    return 1 + Math.max(leftPath, rightPath);
  }
  dfs(root);
  return max;
} // T:O(n) S:O(n)
