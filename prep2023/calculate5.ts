(() => {
  console.log('start');

  const isNumber = (el) => /^\d*$/.test(el);
  const isOperator = (el) => /^[*+-]$/.test(el);
  const getSymbolIndex = (str) => str.search(/[-+*()]/);
  const calc = (right, left, operator) => left + right;

  function calculate(str) {
    const stack = [];
    let postFix = [];

    let length = str.length;
    for (let index = 0; index < length; index++) {
      const el = str[index];
      if (isNumber(el)) {
        let endIndex = index + getSymbolIndex(str.slice(index));
        let num = str.slice(index, endIndex);
        postFix.push(parseInt(num));
        // index = endIndex -1;
        console.log('num', num);
        console.log('endIndex', endIndex);
        continue;
      }
      if (isOperator(el)) {
        stack.push(el);
      }
    }
    console.log(postFix);
    let result;
    while (postFix.length > 0) {
      const right = postFix.pop();
      const left = postFix.pop();
      result += calc(right, left, stack.pop());
    }

    return result;
  }

  console.log(calculate('1121+10'));
})();