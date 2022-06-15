// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function (str, k) {
    let maxCount = -1;
    let hashMapCount = {};
    let start = 0;
    let maxLetterCount = 0;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        hashMapCount[letter] = hashMapCount[letter] == null ? 1 : hashMapCount[letter] + 1;
        maxLetterCount = Math.max(maxLetterCount, hashMapCount[letter]);

        while(i-start+1-maxLetterCount > k){
            let firstLetter = str[start];
            hashMapCount[firstLetter]--;
            start++;
        }

        maxCount = Math.max(maxCount, i - start + 1);
    }

    return maxCount;
}; // T:O(n) S:O(1) K = 26 letters max;

// def length_of_longest_substring(str, k):
//   # max length
//   # sliding window
//   # hashMapCount
//   # max char count

//   maxLength = 0

//   maxCountChar = 0
//   hashMapCount = {}

//   start = 0
//   # len not let
//   for end in range(len(str)):
//     endChar = str[end]

//     if endChar not in hashMapCount:
//       hashMapCount[endChar] = 0
//     # endChar
//     hashMapCount[endChar] += 1

//     # Typicall mistake endChar not end
//     maxCountChar = max(maxCountChar, hashMapCount[endChar])

//     if end - start + 1 - maxCountChar > k:
//       startChar = str[start]
//       # startChar not start
//       hashMapCount[startChar] -= 1;
//       # += not ++
//       start += 1

//     maxLength = max(maxLength, end - start + 1)

//   return maxLength
