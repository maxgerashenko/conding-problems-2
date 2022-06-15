function sameFrequency(n1, n2) {
  // good luck. Add any arguments you deem necessary.
  let c1 = {};
  let c2 = {};

  let s1 = ("" + n1).split("");
  let s2 = ("" + n2).split("");

  for (let el of s1) {
    c1[el] = (c1[el] || 0) + 1;
  }

  for (let el of s2) {
    c2[el] = (c2[el] || 0) + 1;
  }

  for (let i in c1) {
    if (!c2[i]) return false;
    if (c1[i] !== c2[i]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(22, 222)); // false
