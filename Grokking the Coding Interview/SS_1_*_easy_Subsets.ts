// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
//
// Subsets

// Given a set with distinct elements, find all of its distinct subsets.

const find_subsets = function(nums) {
  let subs = [[]];
  for(num of nums){
    let copy = [...subs];
    for(let sub of subs){
      copy.push([...sub, num]);
    }
    subs = [...copy];
  }

  return subs;
}; // T:(N*2^N) S:(N*2^N)
