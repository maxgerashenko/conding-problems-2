// https://leetcode.com/problems/group-anagrams/
//
// Group Anagrams

// Map Count
// use signature
// use array for 26 letters indexes
function groupAnagrams(words: string[]): string[][] {
    const signatureListMap = {};

    for (let word of words) {

        let array = new Array(26).fill(0);

        for (let char of word) array[char.charCodeAt(0) - 97]++;
        const signature = array.join('#');

        if (signatureListMap[signature] == null) {
            signatureListMap[signature] = [];
        }
        signatureListMap[signature].push(word);
    }

    return Object.values(signatureListMap);
}; // T:O(N*M) S:O(N*M)