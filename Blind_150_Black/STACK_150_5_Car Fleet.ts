// https://leetcode.com/problems/car-fleet/description/
// Car Fleet

// use not stack
// sort by position
// use time to define threshold
// cound thresholds
// T:O(n) S:O(1)

var carFleet = function (target, position, speed) {
  let n = position.length;
  let count = 0;
  let minTime = 0;
  let sortedMix = [];

  for (let index = 0; index < n; index++) {
    sortedMix.push([position[index], speed[index]]);
  }
  sortedMix.sort(([posA], [posB]) => posA - posB);

  for (let index = n - 1; index >= 0; index--) {
    let [pos, speed] = sortedMix[index];
    let time = target / speed - pos / speed;

    if (time > minTime) {
      count++;
      minTime = time;
    }
  }
  return count;
}; // T:O(n) S:O(1);

// use stack to find the first car of each fleet
// use stack
// remove caras the bump to First
// return stack
//
// T:O(n) S:O(1)
var carFleet = function (target, position, speed) {
  let n = position.length;
  let stack = [];
  let sortedMix = [];

  for (let index = 0; index < n; index++) {
    sortedMix.push([position[index], speed[index]]);
  }
  sortedMix.sort(([posA], [posB]) => posA - posB);

  for (let index = n - 1; index >= 0; index--) {
    let [pos, speed] = sortedMix[index];
    let time = target / speed - pos / speed;

    if (stack.length === 0 || time > stack[stack.length - 1][0]) {
      stack.push([time, index]);
    }
  }

  console.log(stack.map(([time, index]) => sortedMix[index][0]));

  return stack.length;
}; // T:O(n) S:O(1);
