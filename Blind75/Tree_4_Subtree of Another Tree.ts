// Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/description/

function isSame(treeA, treeB) {
  if (!treeA && !treeB) return true;
  if (!treeA || !treeB) return false;
  if (treeA.val !== treeB.val) return false;
  return isSame(treeA.left, treeB.left) && isSame(treeA.right, treeB.right);
}
function isSubtree(node: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!node) return false;
  return (
    isSame(node, subRoot) ||
    isSubtree(node.left, subRoot) ||
    isSubtree(node.right, subRoot)
  );
} // T:O(M*N) S:O(N)
