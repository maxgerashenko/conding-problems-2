// https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
//
// String Permutations by changing case

const find_letter_case_string_perms = function (str) {
  let perms = [str];
  for (let s in str.split('')) {
    if (!Number.isNaN(Number(str[s]))) continue;
    let len = perms.length;
    for (let j = 0; j < len; j++) {
      let perm = perms[j].split('');
      perm[s] =
        perm[s] === perm[s].toUpperCase()
          ? perm[s].toLowerCase()
          : perm[s].toUpperCase();
      perms.push(perm.join(''));
    }
  }
  return perms;
}; // T:O(S*2^S) S:(S*2^S)
