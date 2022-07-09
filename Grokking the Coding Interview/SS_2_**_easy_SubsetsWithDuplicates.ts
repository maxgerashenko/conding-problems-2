//
//
// Subsets With Duplicates

const find_subs = function (nums) {
  nums.sort((x, y) => x - y);
  let subs = [[]];
  let pre = null;
  let preRight = [];
  for (let num of nums) {
    let left = num != pre ? [...subs] : [...preRight];
    let right = [];
    for (let l of left) {
      right.push([...l, num]);
    }
    subs = num != pre ? [...left, ...right] : [...subs, ...right];
    pre = num;
    preRight = right;
  }
  return subs;
}; // T:O(N2*N) S:O(N2^N)
