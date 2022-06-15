// https://leetcode.com/problems/partition-labels/
// Partition Labels

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const res = [];
    const map = new Map();
    const length = S.length;
    
    // Hash max indexes
    for(let i=0;i<length; i++){
        map.set(S[i], i);
    }

    let max=0, last=0;
    for(let i=0; i<length; i++){
        let cur = S[i];
        max = Math.max(max, map.get(cur));

        if(i===max){
           res.push(i-last+1);
           last = i + 1;
        }
    }
    
    return res;
};

