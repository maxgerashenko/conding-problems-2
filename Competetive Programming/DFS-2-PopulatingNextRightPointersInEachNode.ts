// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// 116. Populating Next Right Pointers in Each Node

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;
  const queue = [root];

  //BFS
  while (queue.length) {
    let prev = null;
    let curLength = queue.length;
    for (let i = 0; i < curLength; i++) {
      let node = queue.shift();
      node.next = null;
      if (prev) {
        prev.next = node;
      }
      prev = node;
      let { left, right } = node;

      left && queue.push(left);
      right && queue.push(right);
    }
  }

  return root;
};

//DFS
