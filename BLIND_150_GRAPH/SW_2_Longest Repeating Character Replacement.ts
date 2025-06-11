// https://leetcode.com/problems/longest-repeating-character-replacement/description/
//
// Longest Repeating Character Replacement

function characterReplacement(str: string, k: number): number {
    const len = str.length;
    const letterCountMap: { [key: string]: number } = {};
    let localMaxCount = 0;
    let start = 0;
    let absoluteMax = 0;

    for (let i = 0; i < len; i++) {
        const letter = str[i];
        letterCountMap[letter] = (letterCountMap[letter] || 0) + 1; // update count

        localMaxCount = Math.max(localMaxCount, letterCountMap[letter]); // udpate max

        const length = i - start + 1;
        if (length - localMaxCount > k) {
            letterCountMap[str[start]]--;
            start++;
        } // update start

        absoluteMax = Math.max(absoluteMax, i - start + 1); // 
    }

    return absoluteMax;
} // T:O(N) S:O(1)