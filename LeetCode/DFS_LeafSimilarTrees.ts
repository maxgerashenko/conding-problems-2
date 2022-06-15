// https://leetcode.com/problems/leaf-similar-trees/
// Leaf-Similar Trees

var leafSimilar = function(root1, root2) {
  // Constraints
  // 1 <= node.length
  // 0 <= node.value

  // Algorithm
  // Find the sequence for both treis with dfs
  // compair arrays

  const getSequence = root => {
    let stack = [root],
      leafs = [];
    while (stack.length) {
      let { val, left, right } = stack.pop();

      // base case
      if (left == null && right == null) {
        leafs.push(val);
      }

      // interate
      right && stack.push(right);
      left && stack.push(left);
    }

    // return result
    return leafs;
  };

  const [leafs1, leafs2] = [root1, root2].map(getSequence);

  // case
  if (leafs1.length !== leafs2.length) return false;

  // case
  for (let i in leafs1) {
    if (leafs1[i] !== leafs2[i]) return false;
  }

  // return value
  return true;
};
