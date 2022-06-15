// Find Largest Value in Each Tree Row
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

// javascript
var largestValues = function(root) {
  // BFS

  if (!root) return [];

  let queue = [root],
    res = [];

  while (queue.length) {
    let len = queue.length,
      max = -Infinity;
    for (let i = 0; i < len; i++) {
      let { val, left, right } = queue.shift();
      max = Math.max(max, val);
      left && queue.push(left);
      right && queue.push(right);
    }
    res.push(max);
    max = -Infinity;
  }

  return res;
};

// Python 3
// class Solution:
//     def largestValues(self, root: TreeNode) -> List[int]:
//         res = []
//         queue = [root]
//         while any(queue):
//             res.append(max(node.val for node in queue))
//             queue = [node for node in queue for node in (node.left, node.right) if node]
//         return res
