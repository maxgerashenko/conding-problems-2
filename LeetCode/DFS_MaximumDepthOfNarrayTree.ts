// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// Maximum Depth of N-ary Tree

// DFS recursevly
var maxDepth = function(root) {
  // DFS recursive

  // connert case
  if (!root) return 0;

  let max = 0;
  (function step(nodes, level) {
    // base case
    if (!nodes || !nodes.length) {
      max = Math.max(max, level);
    }

    // recursion
    for (let node of nodes) {
      let { children } = node;
      step(children, level + 1);
    }
  })([root], 0);
  return max;
};

// BFS recursevly
var maxDepth = function(root) {
  // BFS recursive

  // connner case
  if (!root) return 0;

  let max = 0;
  (function step(nodes, level) {
    // base case
    if (!nodes || !nodes.length) {
      max = level;
      return;
    }

    // recursion, get all children
    let tmp = [];
    for (let node of nodes) {
      let { children } = node;
      tmp.push(...children);
    }
    step(tmp, level + 1);
  })([root], 0);

  // return level
  return max;
};

// DFS iteratively
var maxDepth = function(root) {
  // DFS iteratively

  // conner case
  if (!root) return 0;

  let max = 0,
    stack = [{ node: root, level: 0 }];
  while (stack.length) {
    let { node, level } = stack.pop();
    level++;

    // base case
    let { children } = node;
    if (!children || !children.length) {
      max = Math.max(max, level);
    }

    // iterative
    for (let node of children.reverse()) {
      stack.push({ node, level });
    }
  }

  // return max;
  return max;
};

// BFS iteratively
var maxDepth = function(root) {
  // BFS iteretevly

  // conner case
  if (!root) return 0;

  // Use array
  let max = 0,
    array = [root];
  while (array.length !== 0) {
    max++;

    // iterate
    let tmp = [];
    for (let node of array) {
      let { children } = node;
      tmp.push(...children);
    }

    array = tmp;
  }

  return max;
};
