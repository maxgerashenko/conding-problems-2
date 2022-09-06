// Tree Diameter
//
// https://www.educative.io/courses/grokking-the-coding-interview/xVV1jA29YK9

// Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }
  find_diameter(root) {
    this.dfs(root);
    return this.treeDiameter;
  }
  dfs({ left, right }) {
    if (!left && !right) return 1; // base case
    const leftDiametr = (left && this.dfs(left)) || 0;
    const rightDiametr = (right && this.dfs(right)) || 0;
    const diametr = 1 + leftDiametr + rightDiametr;
    this.treeDiameter = Math.max(this.treeDiameter, diametr);
    return 1 + Math.max(leftDiametr, rightDiametr);
  }
} // T:O(N) all elements S:O(N) stack size
