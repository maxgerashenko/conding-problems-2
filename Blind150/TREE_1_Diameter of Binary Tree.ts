// https://leetcode.com/problems/diameter-of-binary-tree/description/
// Diameter of Binary Tree

// Use DFS
// call max
// retrun diffrent
// use -1 to mark leaf node
// compensate with +2 for max
// return 1 + Math.max(left, right)
// T:O(N) S:O(1)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  function dfs(node: TreeNode) {
    if (node == null) return -1;

    let left = dfs(node.left);
    let right = dfs(node.right);

    max = Math.max(max, left + right + 2);

    return 1 + Math.max(left, right);
  }
  dfs(root);

  return max;
} // T:O(N) S:O(1)
