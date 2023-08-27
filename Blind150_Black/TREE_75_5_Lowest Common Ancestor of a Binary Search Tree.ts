// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Lowest Common Ancestor of a Binary Search Tree

// use DFS
// use bs tree property
// find the split
// move left or right if not
// T:O(N) S:O(1)

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let cur = root;

  while (cur) {
    let { val, left, right } = cur;
    if (p.val < val && q.val < val) {
      cur = left;
      continue;
    } // go left
    if (p.val > val && q.val > val) {
      cur = right;
      continue;
    } // go right
    if ((p.val <= val && q.val >= val) || (p.val >= val && q.val <= val))
      return cur;
  }

  return null;
} // T:O(n) S:O(1)
