// Path with Maximum Sum
//
// https://www.educative.io/courses/grokking-the-coding-interview/B89q6NpX0Vx

function dfs(node,result){
  if(!node) return 0;
  let {value, right, left} = node;
  let r = dfs(right,result);
  let l = dfs(left,result);
  result.max = Math.max(result.max, r + l + value, value);
  return Math.max(l, r) + value;
}

const find_maximum_path_sum = function(root) {
  let result = {max:Number.MIN_SAFE_INTEGER};
  dfs(root,result);
  return result.max
}; // T:O(N) S:O(N)|O(logN)
