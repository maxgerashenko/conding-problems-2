// 838. Push Dominoes
// https://leetcode.com/problems/push-dominoes/

/**
There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.



After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.
**/

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {  
    let dom = dominoes.split('');
    let L = -1;
    let R = -1;   
    let i = 0;
    let length = dom.length;

    while(i < length){
        if(i === length - 1 && R > -1 && L === -1) {
            while(R < length){
                dom[R++] = 'R';
            }
        }
        
        if(dom[i] === '.') {
            i++;
            continue;
        }
        
        if(dom[i] === 'R') {
            R = i + 1;
            i++;
            continue;
        }

        if(dom[i] === 'L' && R === -1) {
            L = i - 1;
            while(L >= 0){
                dom[L] = 'L';
                L--;
            }
            L = -1;
            i++;
            continue;
        }
        
        if(dom[i] === 'L' && R > 0) {
            L = i - 1;
            while(R < L && R !== L) {
                if(dom[L] === '.' ) {
                    dom[L--] = 'L';
                }
                
                if(dom[R] === '.' ) {
                    dom[R++] = 'R';
                }
            }
            
            L = -1;
            R = -1;
        }
        
        i++;
    }

    return dom.join('');
};
