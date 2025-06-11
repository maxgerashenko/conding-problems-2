// Lowest Common Ancestor(LCA) of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

function lowestCommonAncestor(
  node: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  while (node) {
    if (p.val < node.val && q.val < node.val) {
      node = node.left;
      continue;
    }
    if (p.val > node.val && q.val > node.val) {
      node = node.right;
      continue;
    }
    break;
  }
  return node;
} // T:O(logN) S:(n)
