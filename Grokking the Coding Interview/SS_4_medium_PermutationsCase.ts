// https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
//
// String Permutations by changing case

const find_letter_case_string_permutations = function (str) {
  str = str.split('');
  let permutations = [str];

  for (let s in str) {
    let char = str[s];

    if (!isNaN(Number(char))) continue; // number

    let copy = [];
    for (let per of permutations) {
      copy.push([...per]); // existing
      per[s] = per[s].toUpperCase();
      copy.push(per); // upper case
    }
    permutations = copy;
  }

  return permutations.map((s) => s.join(''));
}; // T: (N*2^N) S: (N*2^N)
