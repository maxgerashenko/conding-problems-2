// You have number from 1...10^9 need to find all qnique summands

const ONE_SEC = 1000;
const add1 = x => x + 1;
const mul3 = x => x * 3;

function getParts(x) {
  function getSubParts(x) {
    if (x == 1) {
      return [1];
    }

    let result = [x];
    result = result.concat(getSubParts(x - 1));

    return result;
  }

  const parts = getSubParts(x);
  return parts.filter(v => 2 * v !== x);
}

// O(n) + O(n^n-1);

console.clear();
console.log(
  getParts(1),
  getParts(2),
  getParts(3),
  getParts(4),
  getParts(5),
  getParts(6),
  getParts(7),
  getParts(8),
  getParts(9),
  getParts(10)
);
