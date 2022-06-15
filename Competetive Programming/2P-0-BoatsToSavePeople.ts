// #1
// https://leetcode.com/problems/boats-to-save-people/
// Boats to Save People

var numRescueBoats = function(people, limit) {
  // Constraints
  // 1 <= people length ...
  // 1 <= people[i]
  // 1 <= limit
  // people[i] <= lim

  let res = 0;
  // incremental
  const peopleS = [...people].sort((x, y) => x - y);

  let i = 0,
    j = peopleS.length - 1;
  while (i <= j) {
    res++;
    // if we can add 1 more add if not
    if (peopleS[i] + peopleS[j] <= limit) {
      i++;
    }
    // use just the bigest number;
    j--;
  }
  return res;
};
