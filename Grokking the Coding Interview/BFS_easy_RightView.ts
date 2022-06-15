// https://www.educative.io/courses/grokking-the-coding-interview/B8nj5RB1LJo
//
// Right View of a Binary Tree

// Right View of a Binary Tree (easy)#
// Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

const tree_right_view = function(root) {
  // Right view of Binary Tree
  //
  // Use BFS + Queue
  // take the last value from the level
  // return last values from the level

  // conner case
  if (root == null) return null;

  let queue = [root];
  let rightView = [];
  while (queue.length > 0) {
    let len = queue.length;
    rightView.push(queue[len - 1].value);

    for (let i = 0; i < len; i++) {
      let { right, left } = queue.shift();

      left && queue.push(left);
      right && queue.push(right);
    }
  }

  return rightView;
}; // T:O(N) S:O(N)
