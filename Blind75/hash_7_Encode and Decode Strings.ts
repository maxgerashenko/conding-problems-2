// https://leetcode.com/problems/encode-and-decode-strings/

// The question is how to decode wiht existing info
// use number + # as end of number before each new part
// when you know number take part of length of numer
// then next

console.clear();
console.log('7_Encode and Decode Strings');

const strs = 'Encode and Decode Strings'.split(' ');
console.log(strs);

function enCode(strs) {
  return strs.map((el) => el.length + '#' + el).join('');
}

let endCoded = enCode(strs);
console.log(endCoded);

function deCode(endCoded) {
  let index = 0;
  let results = [];
  while (index < endCoded.length) {
    let numberEndIndex = endCoded.indexOf('#', index);
    let number = endCoded.slice(index, numberEndIndex);
    let wordIEndIndex = numberEndIndex + 1 + parseInt(number) - 1;
    let word = endCoded.slice(numberEndIndex + 1, wordIEndIndex + 1);

    results.push(word);
    index = wordIEndIndex + 1;
  }
  return results;
}

console.log(deCode(endCoded));

// T:O(n) S:O(n)
