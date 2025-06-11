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
// monotonic increase, +* ok .

function calculate(str: string): number {
    const opers = new Set(['-', '+', '*', '/', ')', '(']);
    const opersStack: string[] = [];
    const numsStack: number[] = [];
    const strArr = str.split('').filter(sym => sym !== ' '); // Remove spaces
    const opersPriorityMap = {
        '(': 0, // Lowest priority for '('
        '-': 1, // Addition/Subtraction have equal precedence
        '+': 1,
        '*': 2, // Multiplication/Division have higher precedence
        '/': 2,
    };

    function apply() {
        if (numsStack.length < 2 || opersStack.length === 0)
            throw new Error("Invalid expression: Not enough operands or operators.");

        const right = numsStack.pop()!;
        const left = numsStack.pop()!;
        const symbol = opersStack.pop()!;

        let res = 0;
        switch (symbol) {
            case '-':
                res = left - right;
                break;
            case '+':
                res = left + right;
                break;
            case '*':
                res = left * right;
                break;
            case '/':
                if (right === 0) throw new Error("Division by zero.");
                res = Math.trunc(left / right); // Integer division
                break;
            default:
                throw new Error(`Invalid operator: ${symbol}`);
        }
        numsStack.push(res); // Push the result back onto the number stack
    }

    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[i];

        // Handle opening parenthesis
        if (el === '(') {
            opersStack.push('(');
            continue;
        }

        // Handle closing parenthesis
        if (el === ')') {
            // Apply all operators until matching '('
            while (opersStack.length > 0
                && opersStack[opersStack.length - 1] !== '(')
                apply();
            if (opersStack.length === 0
                || opersStack.pop() !== '(')
                throw new Error("Mismatched parentheses.");
            continue;
        }

        // Handle operators
        if (opers.has(el)) {
            while (
                opersStack.length > 0 &&
                opersPriorityMap[el] <= opersPriorityMap[opersStack[opersStack.length - 1]]
            ) apply();
            opersStack.push(el); // Push current operator onto the stack
            continue;
        }

        // Handle multi-digit numbers
        let num = 0;
        while (i < strArr.length && !opers.has(strArr[i])) {
            if (isNaN(Number(strArr[i]))) throw new Error(`Invalid character in input: ${strArr[i]}`);
            num = num * 10 + Number(strArr[i]);
            i++;
        }
        
        i--; // Adjust index after overshoot

        numsStack.push(num); // Push the parsed number onto the number stack
    }

    // Apply remaining operators
    while (opersStack.length > 0) apply();

    if (numsStack.length !== 1)
        throw new Error("Invalid expression: Unexpected number of values in the stack.");

    return numsStack.pop()!;
} // T:O(N) S:O(N)
