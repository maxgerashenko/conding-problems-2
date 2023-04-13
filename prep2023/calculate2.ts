//
// factor to first value
// parseAll( parseToCalc + symbol + parseAll( parseAll(between) + symbol2 + parseAll(afterClose)
//
//
(() => {
  function isCorrect(str) {
    const indexOpen = str.indexOf('(');
    const indexClose = str.indexOf(')');

    if (indexOpen == -1 && indexClose === -1) return true;
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      if (str[index] === '(') {
        count++;
        continue;
      }
      if (str[index] === ')') {
        count--;
      }
    }
    return count === 0;
  }

  function isNumber(str) {
    return /^\d+$/.test(str);
  }
  function excludeNegative(value) {
    return value === -1 ? Number.MAX_SAFE_INTEGER : value;
  }
  function getFirstSymbolIndex(str) {
    let indexPlus = excludeNegative(str.indexOf('+'));
    let indexMinus = excludeNegative(str.indexOf('-'));
    let indexMulti = excludeNegative(str.indexOf('*'));

    const minIndex = Math.min(indexPlus, indexMinus, indexMulti);
    return minIndex;
  }
  function calc(left, symbol, right) {
    let result;
    switch (symbol) {
      case '+': {
        result = Number(left) + Number(right);
        break;
      }
      case '-': {
        result = Number(left) - Number(right);
        break;
      }
      case '*': {
        result = Number(left) * Number(right);
        break;
      }
    }
    return String(result);
  }
  function getProperCloseIndex(str, indexOpen) {
    let openCount = 1;
    for (let index = indexOpen + 1; index < str.length; index++) {
      if (str[index] === '(') {
        openCount++;
        continue;
      }
      if (str[index] === ')') openCount--;
      if (openCount === 0) return index;
    }
  }
  function parseToCalc(str) {
    if (str === '') return '0';
    let factor = 1;
    if (str[0] == '-') {
      factor = -1;
      str = str.slice(1);
    }
    if (isNumber(str)) {
      return String(factor * Number(str));
    }

    const minSymbolIndex = getFirstSymbolIndex(str);
    const symbol = str[minSymbolIndex];

    const leftPart = str.slice(0, minSymbolIndex);
    const rightPart = str.slice(minSymbolIndex + 1);
    const result = calc(
      String(factor * Number(parseToCalc(leftPart))),
      symbol,
      parseToCalc(rightPart)
    );

    console.log('parseToCalc', str);
    console.log('result', result);
    return String(Number(result));
  }

  function parseAll(str) {
    if (!isCorrect(str)) {
      const message = 'String is not correct';
      console.log(message);
      throw new Error(message);
      return;
    }
    if (str === '') return '';
    const indexOpen = str.indexOf('(');
    const indexClose = str.indexOf(')');
    if (indexClose === -1) return parseToCalc(str);
    console.log('parseAll', str);

    let beforeOpen = '';
    let symbol1 = '';
    if (indexOpen > 0) {
      beforeOpen = str.slice(0, indexOpen - 1);
      symbol1 = str.slice(indexOpen - 1, indexOpen);
    }
    let closeIndex = getProperCloseIndex(str, indexOpen);
    let between = str.slice(indexOpen + 1, closeIndex);

    let symbol2 = str.slice(closeIndex + 1, closeIndex + 2);
    let afterClose = str.slice(closeIndex + 2);

    // console.log('beforeOpen', beforeOpen);
    // console.log('between', between);
    // console.log('symbol1', symbol1);
    // console.log('between', between);
    // console.log('symbol2', symbol2);
    // console.log('afterClose', afterClose);

    return parseAll(
      parseToCalc(beforeOpen) +
        symbol1 +
        parseAll(parseAll(between) + symbol2 + afterClose)
    );
  }

  // console.log(parseAll('-((5+4)*4)+(2*(4+(((2*(1+3))+1)*2)))+2'));
  console.log(parseAll('-(36)+26'));
})();
