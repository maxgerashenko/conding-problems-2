// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// 1026. Maximum Difference Between Node and Ancestor

// To find the maximum diffrence in the Tree
// First of use DFS, recursive works here
// We use preorder traversal because we caclucate the value before recurtion
// DFS should remember about last min and last max value
// Final compuration happends when we reach the last node
// Every leaf node try to udpate the max value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let maxValue = -Infinity;

  (function DFS(node, max, min) {
    if (!node) {
      maxValue = Math.max(maxValue, max - min);
      return;
    }
    let { val, left, right } = node;
    let newMax = Math.max(max, val);
    let newMin = Math.min(min, val);
    DFS(left, newMax, newMin);
    DFS(right, newMax, newMin);
  })(root, -Infinity, +Infinity); // O()

  return maxValue;
};
