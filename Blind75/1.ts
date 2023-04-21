// https://leetcode.com/problems/longest-repeating-character-replacement/description/


var characterReplacement = function(str, k) {
    let hashMapCount = {};
    let left = 0;
    let maxLength =0;
    hashMapCount[str[left]] = 1;
    let topElementCount = 1;
    for(let right=1;right<str.length;right++){
        let el = str[right];
        if(!hashMapCount[el]) {
            hashMapCount[el] = 0;
        }
        hashMapCount[el]++;
        topElementCount = Math.max(topElementCount, hashMapCount[el]);
        while(right-left+1 - topElementCount > k){
            hashMapCount[str[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right-left+1);
    }

    return maxLength;
};