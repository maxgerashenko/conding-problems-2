//
//
// Subsets With Duplicates

const find_subsets = function (nums) {
  const subsets = [[]];

  let preIndex = 0;
  for (let n in nums) {
    let copy = [];
    if (Number(n) > 0 && nums[Number(n) - 1] !== nums[n]) {
      preIndex = 0;
    }
    for (let s = preIndex; s < subsets.length; s++) {
      copy.push([...subsets[s], nums[n]]);
    }
    preIndex = subsets.length;
    subsets.push(...copy);
  }

  return subsets;
}; // T:O(N*2^N) S:O(N*2^N) subsers * subset space
