// Binary Tree Level Order Traversa
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let result = [];
  let level = [root];
  while (level.length) {
    let nextLevel = [];
    let resEl = [];
    while (level.length) {
      let el = level.shift();
      resEl.push(el.val);
      if (el.left) nextLevel.push(el.left);
      if (el.right) nextLevel.push(el.right);
    }
    result.push(resEl);
    level = nextLevel;
  }
  return result;
} // O(N/2) S:O(N)
