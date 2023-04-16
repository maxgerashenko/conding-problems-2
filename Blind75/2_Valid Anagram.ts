/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]]--;
    if (map[t[i]] === 0) delete map[t[i]];
  }
  if (Object.keys(map) > 0) return false;
  return true;
};
// T(n) S(n)
