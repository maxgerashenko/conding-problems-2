//  Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// DFS interational

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

function maxDepth(root: TreeNode | null): number {
  let maxLevel = 0;
  let stack = [{ node: root, level: 1 }];

  while (stack.length) {
    let { node, level } = stack.pop();
    if (node) {
      maxLevel = Math.max(maxLevel, level);
      stack.push({ node: node.left, level: level + 1 });
      stack.push({ node: node.right, level: level + 1 });
    }
  }

  return maxLevel;
} // O:(N) S:O(N)
