// https://leetcode.com/problems/combination-sum/
// Combination Sum

// go left with same number but added as sum and path;
// go right with out the number and no sum and path

function combinationSum(candidates: number[], target: number): number[][] {
  let res = [];
  function bt(index = 0, stack = [], sum = 0) {
    if (sum === target) {
      res.push([...stack]);
      return;
    }
    if (sum > target || index >= candidates.length) return;
    let el = candidates[index];
    stack.push(el);
    bt(index, stack, sum + el); // [2,2,2,2,2]
    stack.pop();
    bt(index + 1, stack, sum); // [][][][][][]
  }
  bt();
  return res;
} // T:O(n^target) S:(target)
