// 18. 4Sum


// https://leetcode.com/problems/4sum/


/**
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

**/

// Solution 4 pointers https://leetcode.com/problems/4sum/discuss/492249/Simple-java-solution-faster-than-74


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   let ans = [];
   let length = nums.length;
    sorted = [...nums].sort( (x,y) => x-y);
    hash = {};
    
    for(let i=0; i<length-3; i++) {
        for(let j=i+1; j<length-2; j++) {
            let l = j + 1;
            let r = length - 1;
            
            while(l < r) {
                let sum = sorted[i]+sorted[j]+sorted[l]+sorted[r];
                let curr = [sorted[i],sorted[j],sorted[l],sorted[r]];
                if(sum === target) {
                    if(!hash[curr]) {
                        ans.push(curr);
                        hash[curr] = 1;
                    }
                    l++;
                }
                if (sum > target) {
                    r--;
                }
                if (sum < target) {
                    l++;
                }
            }
        }
    }
    
    return ans;
};
