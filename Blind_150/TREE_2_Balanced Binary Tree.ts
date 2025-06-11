// https://leetcode.com/problems/balanced-binary-tree/description/
// Balanced Binary Tree

// Use DFS
// retun false or hight
// if any false return false
// check Math.abs(left-right) > 1


function isBalanced(root: TreeNode | null): boolean {
    function dfs(node:TreeNode){
        if(node == null) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if(left === false || right === false) return false;
        if(Math.abs(left - right) > 1) return false;
        return 1 + Math.max(left, right);
    }

    return dfs(root) !== false;
}; // T:O(N) S:O(tree hight)