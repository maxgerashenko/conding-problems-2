// parenthesis
// if '(' just openCount
// if ')' move evething until '('
// dont add '('
// '(' priority 0

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

  console.log(calculate('(10+2*5+(18+2)*(2+1)+10)'));
})();