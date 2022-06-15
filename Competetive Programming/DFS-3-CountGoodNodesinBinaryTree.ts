// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Count Good Nodes in Binary Tree

// dfs
var goodNodes = function(root) {
  let count = 0;
  (function dfs(node, max) {
    // base case
    if (!node) return;

    // response
    let { val, left, right } = node;
    val >= max && count++;
    max = Math.max(max, val);

    // recursive
    dfs(left, max);
    dfs(right, max);
  })(root, root.val);

  // return response
  return count;
};

// interative
var goodNodes = function(root) {
  let count = 0,
    stack = [{ node: root, max: root.val }];

  while (stack.length) {
    let { node, max } = stack.pop();

    // base case
    if (!node) continue;
    let { val, left, right } = node;

    if (val >= max) count++;
    max = Math.max(max, val);

    // iterate
    stack.push({ node: right, max });
    stack.push({ node: left, max });
  }

  return count;
};

// Python dfs
// class Solution:
//     def goodNodes(self, root: TreeNode) -> int:
//         def dfs(node, curr_max):
//             if not node:
//                 return 0
//             curr_max = max(curr_max, node.val)
//             return (int(curr_max <= node.val) + dfs(node.left, curr_max) + dfs(node.right, curr_max))

//         return dfs(root, root.val)

// Python iterative
// count = 0
// stk = [(root, root.val)]
// while stk:
//     node, cur_max = stk.pop()
//     if not node:
//         continue
//     cur_max = max(cur_max, node.val)
//     count += int(node.val >= cur_max)
//     stk.append((node.right, cur_max))
//     stk.append((node.left, cur_max))
// return count