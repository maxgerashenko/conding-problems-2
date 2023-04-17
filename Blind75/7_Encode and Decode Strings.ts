console.log('7_Encode and Decode Strings');

const strs = 'Encode and Decode Strings'.split(' ');

function enCode(strs) {
  return strs.map((el) => el.length + '#' + el).join('');
}

let endCoded = enCode(strs);
console.log(endCoded);

function deCode(endCoded) {
  let index = 0;
  let results = [];
  while (index < endCoded.length - 1) {
    let numberEndIndex = endCoded.indexOf('#');
    let number = endCoded.slice(index, numberEndIndex);
    let wordIEndIndex = numberEndIndex + 1 + parseInt(number);
    let word = endCoded.slice(numberEndIndex + 1, wordIEndIndex);
    results.push(word);
    index = wordIEndIndex + 1;
  }
  return endCoded;
}

console.log(deCode(endCoded));
