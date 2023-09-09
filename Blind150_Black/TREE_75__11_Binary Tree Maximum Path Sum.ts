// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
// Binary Tree Maximum Path Sum

// Use DFS
// Path could be not from top
// Path is not all tree, it's right or left
// use local max as left+rith+value
// return max(left, right)
// ignore negative paths
// use global max
// !!! Path with negative root could be max

// T:O(n)  S:O(n)

function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;
  if (root == null) return 0;

  function dfs({ left, right, val }) {
    let sumLeft = Math.max((left && dfs(left)) || 0, 0);
    let sumRight = Math.max((right && dfs(right)) || 0, 0);
    let maxBranch = Math.max(sumLeft, sumRight);
    let localSum = val + sumLeft + sumRight;
    max = Math.max(max, localSum);
    return val + maxBranch;
  }

  dfs(root);

  return max;
} // T:O(n) S:O(n)
