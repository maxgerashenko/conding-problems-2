// https://leetcode.com/problems/car-fleet/
// Car Fleet

// revers order
// check closest first
// if cur < last it is a fleet
// if cur > last it is a new fleet

function carFleet(target: number, position: number[], speed: number[]): number {
  let carPoop = position
    .map((el, i) => ({ pos: el, speed: speed[i] }))
    .sort((a, b) => b.pos - a.pos);
  let stack = [];
  for (let { pos, speed } of carPoop) {
    let cur = target / speed - pos / speed;
    if (stack.length === 0) {
      stack.push(cur);
      continue;
    }
    if (cur <= stack.slice(-1)[0]) continue;
    stack.push(cur);
  }

  return stack.length;
} // T:O(nlogn) S:O(n)
