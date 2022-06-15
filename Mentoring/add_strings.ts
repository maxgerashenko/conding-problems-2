const getInteger = value => (value > 18582506933032750) 
        ? 18582506933032750 
        : (value < -18582506933032750) 
            ? -18582506933032750
            : value;

const sumWithCurryF = () => {
    let curry = 0;
    return {
        exec: (x, y) => {
            let result = x + y + curry;
            curry = 0;

            if(result > 9) {
                curry = 1;
                result = result%10
            }

            return result;
        },
        last:() => {
         let value = curry;
         curry = 0; 
         return value;
        }
    }
}

const sumWithCurry = sumWithCurryF();

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let longets = (num1.length > num2.length ) ? num1: num2;
    let shortest = (longets === num1) ? num2 : num1;
    shortest = shortest.split('').reverse().join('');
    
    let result = longets.split('').reverse().map( (n,i) => { 
        return sumWithCurry.exec(+n, (shortest[i] === undefined) ? 0 : +shortest[i]);
    });
    
    if(sumWithCurry.last()) {
        result.push('1');
    }
    
    return result.reverse().join('');
};
