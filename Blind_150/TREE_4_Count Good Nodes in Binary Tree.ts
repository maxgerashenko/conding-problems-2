// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Count Good Nodes in Binary Tree

// Tree
// DFS
// Use local max, count = val >= max ? 1 : 0
// Return count + left + right
// T:O(N) S:O(logN) // tree hight

function goodNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode, max = 0) {
    if (node == null) return 0;
    let cur = node.val >= max ? 1 : 0;
    max = Math.max(max, node.val);
    let left = dfs(node.left, max);
    let right = dfs(node.right, max);
    return cur + left + right;
  }
  return dfs(root);
} // T:O(N) S:O(logN) // tree hight
