// Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

// Pre order knows about the root
// first is root
// In Order know where is the mid
// from there we know where is left and right

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root.val); // root index
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)); // get the same count of elements
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1)); //
  return root;
} // T:O(n^2) S:O(N)
// N^2 when Tree is a linked list and indexOf need always to go the end of the inrder list
