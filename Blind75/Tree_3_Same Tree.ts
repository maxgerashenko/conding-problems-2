// Same Tree
// https://leetcode.com/problems/same-tree/description/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(first: TreeNode | null, second: TreeNode | null): boolean {
  if (!first && !second) return true;
  if (!first || !second) return false;
  if (first.val !== second.val) return false;
  return (
    isSameTree(first.left, second.left) && isSameTree(first.right, second.right)
  );
} // T:(N+M) S:O(N)
