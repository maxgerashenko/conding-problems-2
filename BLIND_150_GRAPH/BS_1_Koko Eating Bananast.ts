// https://leetcode.com/problems/koko-eating-bananas/
// 
// Koko Eating Bananas

function minEatingSpeed(piles: number[], h: number): number {
    // Sort the array to determine the range of possible eating rates.
    piles.sort((a, b) => a - b);

    let start = 1; // Minimum possible rate.
    let end = piles[piles.length - 1]; // Maximum possible rate is the largest pile.

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let hours = 0;

        // Calculate the total hours needed to eat all bananas at rate `mid`.
        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        // If the total hours is within the allowed `h`, try a smaller rate.
        if (hours <= h) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
} // T:O(NlogN) S:O(N)