// Tree Diameter
//
// https://www.educative.io/courses/grokking-the-coding-interview/xVV1jA29YK9

// Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
    this.max = 0;
  }
  dfs({right, left}) {
    if(!right && !left) return 1;
    let l = left && this.dfs(left) || 0;
    let r = right && this.dfs(right) || 0;
    this.max = Math.max(this.max, l + r + 1);
    return Math.max(l, r) + 1;
  }
  find_diameter(root) {
    this.dfs(root).length;
    return this.max
  }
} // T:O(N) S:O(N|O(logN) - recurcive stack
