// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// Evaluate Reverse Polish Notation

// use stack
// ignore operators priority
// ignore ()

function evalRPN(tokens: string[]): number {
  let stack = [];
  let operators = ['+', '-', '*', '/'];

  let operation = {
    '+': (a, b) => ~~(a + b),
    '-': (a, b) => ~~(a - b),
    '*': (a, b) => ~~(a * b),
    '/': (a, b) => ~~(a / b),
  };
  function calc(b, a, operator) {
    return operation[operator](a, b);
  }

  for (let el of tokens) {
    if (operators.indexOf(el) > -1) {
      let res = calc(stack.pop(), stack.pop(), el);
      stack.push(res);
      continue;
    }
    stack.push(Number(el));
  }

  return stack.pop();
} // T:O(n) S:O(n)
