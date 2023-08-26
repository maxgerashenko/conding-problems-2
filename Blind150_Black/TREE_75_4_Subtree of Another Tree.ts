// Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/description/

// use DFS
// use 2 recursions
// use && for match
// use || for next
// should match full height with bottom element
// target can not be in the middle
// when target == null return false
// T:O(n*m) S:O(n*m) ???

function isTheSame(a, b) {
  if (a == null && b == null) return true;

  return (
    a &&
    b &&
    a.val === b.val &&
    isTheSame(a.left, b.left) &&
    isTheSame(a.right, b.right)
  );
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot == null) return true;
  if (root == null) return false;

  if (isTheSame(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
} // T:O(N*M) S:O(N+M)
