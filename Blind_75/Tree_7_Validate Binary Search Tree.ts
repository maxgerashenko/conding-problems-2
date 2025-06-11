// Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/description/

function isValidBST(
    node: TreeNode | null, 
    leftLimit = Number.MIN_SAFE_INTEGER, 
    rightLimit = Number.MAX_SAFE_INTEGER): boolean {
    if(!node) return true;

    if(node.val <= leftLimit || node.val >= rightLimit) return false;
    return isValidBST(node.left,leftLimit, node.val)
        && isValidBST(node.right, node.val, rightLimit);
}; // T:O(N) S:O(N)