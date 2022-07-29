// Equal Subset Sum Partition (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr

const can_partition = function (
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = sum / 2,
  matrix = [true]
) {
  if (sum % 2 !== 0) return false;
  for (let s = 1; s < half + 1; s++) matrix[s] = nums[0] === s;
  for (let i = 1; i < nums.length - 1; i++)
    for (let h = half; h > 0; h--) matrix[h] = matrix[h] || matrix[h - nums[i]];
  return matrix[half];
}; // T:O(NH) n - numbser h - half of numbers sum
