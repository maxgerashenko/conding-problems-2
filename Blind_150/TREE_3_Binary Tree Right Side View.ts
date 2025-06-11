// https://leetcode.com/problems/binary-tree-right-side-view/
// Binary Tree Right Side View

// Tree
// use separate array for res
// check tmp not null before pushing
// check arr not empyt before pushing
// check left and right not null before pushing

function rightSideView(root: TreeNode | null): number[] {
  let res = [];
  function bfs(level: TreeNode[] | null) {
    if (level == null || level.length === 0) return; // connner case
    let newLevel = [];
    let tmp = null;
    for (let node of level) {
      if (node == null) continue;
      if (node.left) newLevel.push(node.left); // base case
      if (node.right) newLevel.push(node.right); // base case
      tmp = node;
    }
    tmp && res.push(tmp.val); // base case
    bfs(newLevel);
  }
  bfs([root]);
  return res;
} // T:O(N) S:O(n/2)
