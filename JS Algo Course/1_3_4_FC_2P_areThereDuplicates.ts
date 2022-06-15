function areThereDuplicates(...args) {
  // Frequensy counter
  let c = {};

  if (args.length === 0) return false;

  for (let el of args) {
    if (c[el]) return true;
    c[el] = true;
  }

  return false;
}

function areThereDuplicates() {
  // Set as frequensy couner
  return new Set(arguments).size !== arguments.length;
}

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "a")); // true
