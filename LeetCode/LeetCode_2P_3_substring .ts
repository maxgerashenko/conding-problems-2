/// 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0, j=0, s_max = 0;
    let hashMap = {};
    let n = s.length
    
    while( i < n && j < n ) {
        if(hashMap[s[j]] == null ) {
          hashMap[s[j]] = j++;
          s_max = Math.max(s_max, j-i);
        } else {
            delete hashMap[s[i++]];
        }
    }

    return s_max;
};