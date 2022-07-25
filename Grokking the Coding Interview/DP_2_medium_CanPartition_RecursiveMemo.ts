// Equal Subset Sum Partition (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr

function can_partition(
  nums,
  half = nums.reduce((pre, el) => pre + el, 0) / 2,
  dp = new Map()
) {
  if (dp.has(nums) && dp.get(nums)[half]) return dp.get(nums)[half];
  if (!dp.has(nums)) dp.set(nums, {});
  if (half === 0) return true;
  let res = !!nums.reduce(
    (pre, el, i) =>
      (pre |= can_partition(
        [...nums.slice(0, i), ...nums.slice(i + 1)],
        half - el
      )),
    0,
    dp
  );
  dp.set(nums, { ...dp.get(nums), half: res });
  return res;
} // T:O(2^N) S:O(N*S) N - numbers S - sums

// Use 'Bit OR' | and reduce to find the result
