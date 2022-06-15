

let arr = [];

dfs(root, arr);

// In Order
function dfs(node, arr) {
  if (node == null) return;
  const { left, right, val } = node;
  dfs(left, arr);
  arr.push(val);
  dfs(right, arr);
}

// arr
