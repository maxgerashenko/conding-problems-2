const groupAnagrams = function (strs) {
  let signatureMap = {};
  let resultsCountMap = {};

  for (let str of strs) {
    let signature = str.split('').sort().join('');
    signatureMap[str] = signature;

    if (resultsCountMap[signature] == null) {
      resultsCountMap[signature] = [str];
      continue;
    }

    resultsCountMap[signature].push(str);
  }

  return Object.values(resultsCountMap);
};

// O(NlogN) S:O(N)
