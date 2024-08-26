// https://leetcode.com/problems/multiply-strings/description/
//
// Multiply Strings

// https://leetcode.com/problems/multiply-strings/
//
// Multiply Strings

// reverse
// res[i+j] = n1 * n2 // product
// carry from res[i] to next with % 10
// revemo '0' from the start
function multiply(num1: string, num2: string): string {
    let [len1, len2] = [num1, num2].map(num => num.length);
    let res = Array(len1 + len2).fill(0);
    let [numR1, numR2] = [num1, num2].map(
        nums => nums
            .split('')
            .reverse()
            .map(num => Number(num)));

    for (let i = 0; i < len1; i++)
        for (let j = 0; j < len2; j++) {
            res[i + j] += numR1[i] * numR2[j];
        } // get products

    let next = 0;
    for (let i = 0; i < res.length; i++) {
        let cur = next + res[i];
        res[i] = cur % 10;
        next = ~~(cur / 10);
    }

    while (res.length > 1 && res[res.length - 1] === 0) res.pop();

    return res.reverse().join('');;
}; // T:O(n*m) S:O(n+m)