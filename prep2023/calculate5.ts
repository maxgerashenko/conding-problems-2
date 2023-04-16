(() => {
  console.clear();

  const isNumber = (el) => /^\d*$/.test(el);
  const isOperator = (el) => /^[*+-]$/.test(el);
  const getSymbolIndex = (str) => str.search(/[-+*()]/);
  const calc = (right, left, operator) => {
    console.log(parseInt(right));
    console.log(left);
    console.log(parseInt(right) + parseInt(left));

    return parseInt(right) + parseInt(left);
  };

  function calculate(str) {
    const stack = [];
    let postFix = [];

    let length = str.length;
    for (let index = 0; index < length; index++) {
      const el = str[index];
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
        stack.push(el);
        continue;
      }
    }
    console.log(postFix);
    console.log(stack);
    while (postFix.length > 1) {
      const right = postFix.pop();
      const left = postFix.pop();

      console.log('isNumber(right)', isNumber(right));
      console.log('isNumber(left)', isNumber(left));

      postFix.push(left + right);
      console.log('isNumber(result)', isNumber(left + right));
      console.log('result', left + right);
    }

    return postFix[0];
  }

  console.log(calculate('11+22+33+44'));
})();
