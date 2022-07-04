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
  let result = [];
  for(let i in nums){
    while(nums[i] >= 0 && nums[i] !== i && nums[i] !== nums[nums[i]]){
      let val = nums[i];
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  }
  let i = 1;
  while(k > 0){
    if(nums[i] !== i) {
      result.push(i);
      k--;
    }
    i++;
  }
  return result;
}; // T:O(N+K) S:O(K)
