// Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

// InOrder Intetevly
function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    count++;
    if (count === k) return cur.val;
    cur = cur.right;
  }
  return null;
} // T:O(n) S:O(n)
