//
//
//
//
//

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
    if (openCount < 0) Throw(Error());
  }
}
function parseTocal(str) {
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
    String(factor * Number(parseTocal(leftPart))),
    symbol,
    parseTocal(rightPart)
  );

  return String(Number(result));
}

function parseAll(str) {
  console.log(str);
  if (str === '') return '';
  const indexOpen = str.indexOf('(');
  const indexClose = str.indexOf(')');

  if (indexClose === -1) return parseTocal(str);
  if (indexOpen === -1) return '';

  let beforeOpen = '';
  if (indexOpen > -1) {
    beforeOpen = str.slice(0, indexOpen);
  }
  let closeIndex = getProperCloseIndex(str, indexOpen);
  let between = str.slice(indexOpen + 1, closeIndex);
  let symbol = str.slice(closeIndex + 1, closeIndex + 2);
  let afterClose = str.slice(closeIndex + 2);

  console.log('beforeOpen', beforeOpen);
  console.log('between', between);
  console.log('symbol', symbol);
  console.log('afterClose', afterClose);

  return (
    Number(parseTocal(beforeOpen)) +
    Number(parseAll(parseAll(between) + symbol + parseAll(afterClose)))
  );
}

console.log(parseAll('1+((2*3)+1-1+(2*4))'));
