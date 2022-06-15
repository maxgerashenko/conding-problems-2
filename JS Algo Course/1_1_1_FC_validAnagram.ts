function validAnagram(s1, s2) {
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) return false;
  let c1 = {},
    c2 = {};

  for (let i in s1) {
    const s1el = s1[i];
    const s2el = s2[i];
    c1[s1el] = (c1[s1el] || 0) + 1;
    c2[s2el] = (c2[s2el] || 0) + 1;
  }

  for (let el in c1) {
    const c1el = c1[el];
    const c2el = c2[el];
    if (!c1el || !c2el) return false;
    if (c1el !== c2el) return false;
  }

  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // false
