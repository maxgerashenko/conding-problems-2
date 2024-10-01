// https://leetcode.com/problems/partition-equal-subset-sum/
// 
// Partition Equal Subset



// bruteforce 2^N
// dp target-n & i
// order dosn't matter, dist matter
// use set for sums with 2 loops
function canPartition(nums: number[]): boolean {
    let totalSum = nums.reduce((pre, el) => pre + el, 0);

    if (totalSum % 2 === 1) return false;
    let target = totalSum / 2;
    let sumsSet = new Set([0]); // base case !!!

    for (let num of nums) {
        let tmp = [...sumsSet]; // don't modify on fly
        for (let sum of tmp) {
            let newSum = sum + num;
            if (newSum === target) return true;
            if (newSum > target) continue;
            sumsSet.add(newSum);
        }
    }

    return false
}; // T:O(n*sum) S:O(sum)