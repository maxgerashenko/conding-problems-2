// Hand of Straights
//
// https://leetcode.com/problems/hand-of-straights/description/

// sort cards with heap
// countMap


function isNStraightHand(hand: number[], groupSize: number): boolean {
    let len = hand.length;
    let heap = new Heap();
    let countMap = {};

    if (len % groupSize > 0) return false; // conner case

    for (let el of hand) {
        if (countMap[el] == null) {
            heap.add(el); // add only once
            countMap[el] = 0;
        }
        countMap[el]++;
    }

    while (heap.heap.length > 0) {
        let start = heap.peek();

        // clean up used values
        if (countMap[start] === 0) {
            heap.remove();
            continue;
        }
        countMap[start]--;

        // range of consecuent values
        for (let el = start + 1; el < start + groupSize; el++) {
            if (countMap[el] == null || countMap[el] == 0) return false; // base case
            countMap[el]--;
        }
    }

    return true; // positive case
}; // T:O(NlognN) S:O(1);