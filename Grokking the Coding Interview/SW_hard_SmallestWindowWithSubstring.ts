//
// Smallest Window containing Substring

// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

// Example 1:
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

const find_substring = function(str, pattern) {
  // Find the shortest substring, when string has all chars from the pattern
  // 
  // use 2 pointers from 1 side as a sliding window
  // use hashMap to count pattern chars
  // use match counter to know when the pattern is matched
  // 
  // init minStar
  // 
  // init hashMap and count the patter chars
  // iterate the string
  // if end is in the hashMap decrement hashMap count
  // if hashMap end count === 0, increment match count
  // while matchCount === 0, 
  // and update minLength = min(minStart+minLength, end-start+1)
  // and start++
  // and hashMap(start) in hashMap, hashMap start --;
  // return if Infinity return "", or slice(start, end+1)

  let minLength = Infinity;
  let minStart = 0;

  // init hashMapCount
  let hashMapCount = {};
  for(let i=0; i<pattern.length; i++){
    let char = pattern[i];
    if(!(char in hashMapCount)) {
      hashMapCount[char] = 0;
    }
    hashMapCount[char]++;
  }

  let matchCount = 0;

  // iterate the array
  let start = 0;
  for(end=0; end<str.length; end++) {
    let endChar = str[end];

    if(endChar in hashMapCount){
      hashMapCount[endChar]--;
      if(hashMapCount[endChar] === 0){
        matchCount++;
      }
    }

    while(matchCount === Object.keys(hashMapCount).length){
      // update min length
      if(end-start+1 < minLength){
        minLength = end-start+1;
        minStart = start;
      }

      let startChar = str[start];
      if(startChar in hashMapCount){
        if(hashMapCount[startChar]===0){
          matchCount--;
        }
        hashMapCount[startChar]++;
      }

      start++;
    }
  }

  return minLength == Infinity ? '' : str.slice(minStart, minStart + minLength);
} // O(N + N) // O(P)
