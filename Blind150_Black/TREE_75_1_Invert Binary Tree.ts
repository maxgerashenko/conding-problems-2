// https://leetcode.com/problems/invert-binary-tree/description/
// Invert Binary Tree

// use DFS
// swap left & right

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return root; // connser case;
  let { left, right } = root;

  root.left = right;
  root.right = left;
  left && invertTree(left);
  right && invertTree(right);
  return root;
} // T:O(N) S:O(N)
