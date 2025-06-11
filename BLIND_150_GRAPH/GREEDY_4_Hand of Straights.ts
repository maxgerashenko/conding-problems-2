// https://leetcode.com/problems/hand-of-straights/description/
//
// Hand of Straights


// 2 for loops
// cardsMapCount
// count groups by consecutive numbers
function isNStraightHand(hand: number[], groupSize: number): boolean {
  let len = hand.length;
  hand.sort((a, b) => a - b);

  if (len % groupSize !== 0) return false; // conner case

  const cardsMapCount = {};
  for (let num of hand) {
    if (cardsMapCount[num] == null) {
      cardsMapCount[num] = 0;
    }

    cardsMapCount[num]++;
  } // creat a mapCount

  for (let num of hand) {
    if (cardsMapCount[num] == 0) continue;

    let count = groupSize;
    while (count > 0) {
      if (cardsMapCount[num] == null || cardsMapCount[num] == 0) return false;
      cardsMapCount[num]--;
      num++;
      count--;
    }
  }

  return true;
} // T:O(n*m) S:O(1)
