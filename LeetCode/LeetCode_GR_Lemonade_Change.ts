// 买柠檬找零
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
        let cash = [,,,,,0,,,,,0,,,,,,,,,,0];
		for (let b in  bills) {
            ++cash[bills[b]];
            if (cash[5] < cash[10] + cash[20] ) return false;
            if (cash[5] < 3 * cash[20] - cash[10]) return false;
        }
        return true;
};

// my
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let cash = [];
    for(b in bills) {
        cash.push(bills[b]);
        cash.sort((x,y) => y-x);
        
        let pay = bills[b] - 5;
        let i = 0;
        while(pay > 0 && i < cash.length) {
            if(cash[i] <= pay){
                console.log(cash[i]);
                pay -= cash[i];
                cash.splice(i, 1);
            } else {  
                i++;
            }
        }
        
        if(pay !== 0) {
            return false;
        }
    }
    
    return true;
};

// leetcode
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(b) {
    let b5 = 0, b10 = 0, pay;
    for(i in b){
        pay = b[i];
        if(pay === 5){
            b5++;
        } else if(pay === 10){
            if(b5 > 0){
                b5--;
                b10++;
            } else {
                return false;
            }
        } else if( pay === 20){
            if(b10 > 0 && b5 > 0){
                b10--;
                b5--;
            } else if(b5 > 2) {
                      b5 -= 3
            } else {
                return false;
            }
        }
    }
    
    return true;
};