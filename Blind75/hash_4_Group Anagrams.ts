// https://leetcode.com/problems/group-anagrams/

// use hashMapCount to store signatures
// if string match pattern add to the group
// use sorted string as a signature

const groupAnagrams = function (strs) {
  let signatureMap = {};
  let resultsCountMap = {};

  for (let str of strs) {
    let signature = str.split('').sort().join('');
    signatureMap[str] = signature;

    if (resultsCountMap[signature] == null) {
      resultsCountMap[signature] = [];
    }

    resultsCountMap[signature].push(str);
  }

  return Object.values(resultsCountMap);
};

// O(NlogN) S:O(N)
