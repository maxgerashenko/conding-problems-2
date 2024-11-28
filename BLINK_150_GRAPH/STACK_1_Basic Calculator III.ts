// https://leetcode.com/problems/basic-calculator/
// https://leetcode.com/problems/basic-calculator-iii/description/
//
// Basic Calculator III 

// while in forward order
// numsStack
// operStack
// Hight priority, LowPriority, Parentasis
// add nums to numsStack
// '(' add to the opStack
// ')' call all after '('
// monotonic increase, +* ok 

function calculate(str: string): number {
    const strArray = str.split('').filter((el) => el !== ' ');
    const len = strArray.length;
    const numStack = [];
    const opStack = [];
    const priority = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        ')': 0,
        '(': 0,
    } // else 0
    const symbols = new Set(['+', '-', '/', '*', '(', ')']);

    function applyOp() {
        if (numStack.length < 2 || opStack.length === 0) return;
        const [right, left, oper] = [numStack.pop(), numStack.pop(), opStack.pop()];

        let res = 0;
        switch (oper) {
            case '+':
                res = left + right;
                break;
            case '-':
                res = left - right
                break;
            case '*':
                res = left * right
                break;
            case '/':
                res = Math.trunc(left / right); // Truncate toward zero
                break;
            default:
                break;
        }
        numStack.push(res);
    };

    let index = 0;
    while (index < len) {
        const symbol = strArray[index];

        if (symbols.has(symbol) == false) {
            let num = 0;
            while (index < len && symbols.has(strArray[index]) == false) {
                num = num * 10 + Number(strArray[index]);
                index++;
            } // multi-digit numbers
            numStack.push(num);
            continue;
        } // numbers

        if (symbol === '(') {
            opStack.push(symbol);
            index++;
            continue;
        }
        if (symbol === ')') {
            while (opStack.length > 0 && opStack[opStack.length - 1] !== '(') {
                applyOp();
            }
            opStack.pop(); // Remove '(' from opStack
            index++;
            continue;
        }

        while (
            opStack.length > 0 &&
            priority[symbol] <= priority[opStack[opStack.length - 1]]
        ) applyOp(); // mono increase
        opStack.push(symbol);
        index++;
    }

    while (opStack.length > 0) applyOp();
    return numStack.length > 0 ? numStack.pop()! : 0;
}
