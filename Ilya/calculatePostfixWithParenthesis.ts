// https://www.youtube.com/watch?v=rUC2Rffejj8&list=RDCMUC4_AV_DlLXKdtYDV94Y4Jow&start_radio=1&rv=rUC2Rffejj8&t=19

// https://www.youtube.com/watch?v=84BsI5VJPq4

// prefix to postfix
// calculate postfix

// - prefixArray + stack
// + = 1 priority
// * = 2 priority

// prefix
// if number push to stack
// if operator
// while stackTopPriority >= elPriority all to prefix
// then push operator to stack
// if end stack[0] === result
// at the end push all stack to postfix

// parenthesis
// if '(' just openCount
// if ')' move evething until '('
// dont add '(' to postfix
// '(' priority 0

// postfix
// calcStack
// if number push to stack
// if operator, then calc (i-1 operator i-2), push to stack
// if end stack[0] === result

(() => {
  console.clear();
  const priorityMap = {
    '(': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };
  const getStackTop = (arr) => arr[arr.length - 1];
  const isNumber = (el) => /^\d*$/.test(el);
  const isOperator = (el) => /^[*+-]$/.test(el);
  const getSymbolIndex = (str) => str.search(/[-+*()]/);
  const isTopHigherPriority = (el, stack) => {
    let lastIndex = stack.length - 1;
    let topOfStack = stack[lastIndex];
    return priorityMap[topOfStack] >= priorityMap[el];
  };
  function calc(left, right, operator) {
    console.log(left, operator, right);
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
    }
  }
  function getPostFix(str) {
    console.log(str);
    let stack = [];
    let postFix = [];

    let length = str.length;
    for (let index = 0; index < length + 1; index++) {
      const el = str[index];
      console.log(el);

      if (el === '(') {
        stack.push('(');
        continue;
      }
      if (el === ')') {
        console.log('----');
        while (getStackTop(stack) !== '(') {
          postFix.push(stack.pop());
        }
        stack.pop();
        continue;
      }
      if (isNumber(el)) {
        let endIndex = getSymbolIndex(str.slice(index));
        if (endIndex === -1) {
          let num = str.slice(index);
          postFix.push(parseInt(num));
          break;
        }

        let num = str.slice(index, index + endIndex);
        postFix.push(parseInt(num));
        index += endIndex - 1;
        continue;
      }
      if (isOperator(el)) {
        while (isTopHigherPriority(el, stack)) {
          postFix.push(stack.pop());
        }
        stack.push(el);
        continue;
      }
    }
    console.log(JSON.stringify(stack));
    postFix.push(...stack.reverse());
    console.log(JSON.stringify(postFix));
    return postFix;
  }
  function calculatePostFix(postFix) {
    let stack = [];

    while (postFix.length > 0) {
      // console.log(stack);
      let el = postFix.shift();
      if (isNumber(el)) {
        stack.push(el);
        continue;
      }
      const right = stack.pop();
      const left = stack.pop();
      let result = calc(left, right, el);
      stack.push(result);
    }
    return stack.pop();
  }

  function calculate(str) {
    let postFix = getPostFix(str);
    return calculatePostFix(postFix);
  }

  console.log(calculate('(10*2+5+(1+18*2+3)*(2+1)+10)'));
})();
