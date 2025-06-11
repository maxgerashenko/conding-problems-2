// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
// Binary Tree Maximum Path Sum

// use dfs
// calculate and return diffrent
// return local result
// calculate max max brefore reurn
// use 0 to avoid negative
// to avoid global, return max from bottom to top

function maxPathSum(node: TreeNode | null): number {
  if (!node) return 0;
  function dfs(node, max = Number.MIN_SAFE_INTEGER) {
    if (!node) return { max, local: 0 };

    let resLeft = dfs(node.left, max); // get local max
    let resRight = dfs(node.right, max);
    let leftMax = Math.max(resLeft.local, 0); // avoid negative
    let rightMax = Math.max(resRight.local, 0);
    max = Math.max(
      max,
      resLeft.max,
      resRight.max,
      node.val + leftMax + rightMax
    );

    return { max, local: Math.max(node.val + leftMax, node.val + rightMax) };
  }
  return dfs(node).max;
} // T:O(N) S:O(N)
