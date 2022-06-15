// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// 1161. Maximum Level Sum of a Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  const queue = [root];
  const levels = [0];
  let levelCount = queue.length;

  // BFS
  while (queue.length) {
    if (levelCount === 0) {
      levels.push(0);
      levelCount = queue.length;
    }

    let { val, left, right } = queue.shift();
    levels[levels.length - 1] += val;

    left && queue.push(left);
    right && queue.push(right);
    levelCount--;
  }

  const max = Math.max(...levels);
  return levels.indexOf(max) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  const levels = [-Infinity];
  (function DFS(node, level) {
    if (!node) return;
    if (levels.length === level) levels.push(0);

    const { left, right, val } = node;
    levels[level] += val;

    level++;
    DFS(left, level);
    DFS(right, level);
  })(root, 1);

  const max = Math.max(...levels);
  return levels.indexOf(max);
};

// object
//return Object.keys(levels).reduce( (a,b) => levels[a] > levels[b] ? a : b)[0];

var maxLevelSum = function(root) {
  const levels = [];
  (function DFS(node, level) {
    if (!node) return;
    if (levels.length === level) levels.push(0);

    const { left, right, val } = node;
    levels[level] += val;

    level++;
    DFS(left, level);
    DFS(right, level);
  })(root, 0);

  let max = Math.max(...levels);
  return levels.indexOf(max) + 1;
};
