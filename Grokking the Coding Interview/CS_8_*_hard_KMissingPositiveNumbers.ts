// https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0
// Find the First K Missing Positive Numbers

// Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

// Find first K missing poitive numbers
//
// iterate array
// if not 2=2=2 [i] != [[i]-1]
// swap [i,j]=[j,i]
// remember if [i] > length
//
// iterate
// find [i] !== i+1 and >0 and not it ther set

// conner case
const find_first_k_missing_positive = function(nums, k) {
  const result = [];
  for (let i in nums) {
    while (nums[i] !== +i && nums[i] >= 0 && nums[nums[i]] != nums[i]) {
      let val = nums[i];
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  }

  let i = 1;
  while(result.length < k){
    if(nums[i] != +i) result.push(i);
    i++;
  }
  return result;
}; // T:O(N + N-1 + K) S:O(K)
