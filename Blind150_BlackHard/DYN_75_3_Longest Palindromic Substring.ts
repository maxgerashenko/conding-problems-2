// Longest Palindromic Substring
//
// https://leetcode.com/problems/longest-palindromic-substring/description/

function longestPalindrome(str: string): string {
    let len = str.length;
    if (len < 2) return str;
    let res = str[0];

    // odd
    for (let i = 1; i < len - 1; i++) {
        let l = i - 1;
        let r = i + 1;

        while (l >= 0 && r < len) {

            if (str[l] != str[r]) break;
            if (r - l + 1 > res.length) {
                res = str.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    // even
    for (let i = 1; i < len; i++) {
        let l = i - 1;
        let r = i;
        while (l >= 0 && r < len) {
            if (str[l] != str[r]) break;
            if (res.length < r - l + 1) {
                res = str.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return res;
}; // T:O(2n^2) S:O(n)