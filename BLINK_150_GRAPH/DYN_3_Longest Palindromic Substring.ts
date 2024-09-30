// https://leetcode.com/problems/longest-palindromic-substring/
// 
// Longest Palindromic Substring


// expand from the center
// go twice for odd and even
function longestPalindrome(str: string): string {
    const len = str.length;
    let res = str[0];

    // odd
    for (let i = 1; i < len; i++) {
        let l = i - 1;
        let r = i + 1;

        while (l >= 0 && r < len) {
            if (str[l] !== str[r]) break;
            if (res.length < r - l + 1) {
                res = str.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    // even
    for (let i = 0; i < len; i++) {
        let r = i + 1;
        let l = i;

        while (l >= 0 && r < len) {
            if (str[l] !== str[r]) break;
            if (res.length < r - l + 1) {
                res = str.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return res;
}; // T:O(n^2) S:O(n)