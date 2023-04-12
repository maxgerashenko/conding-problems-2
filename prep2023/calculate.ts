console.clear();
(function () {
  // string
  // +,*
  // ( )
  // no mistake
  // max length

  // return number

  // '5' Number(a)
  // '1+2'.spitt('+') a + b = c
  // '1+2' , '1*2' switch +: 'a+b', *; a*b
  // (1+2) = 3
  // 1+1+1+1

  // (((1)))
  /* O(n) */
  // n = x + x + x +
  /* O(n) */
  //(1+2)*3
  // -?

  /*
result 48
{
  context: '1+32+15'
  if('(')
  subContext: {
    context: '32',
      subContext:{
         context: '16*2',
         subContext:{
            context: '1+15',
            if(')')
          }
        }
      }
    }

*/

  function isNumber(str) {
    return /^[0-9]*$/.test(str);
  }

  function getFirstSymbol(str) {
    const plusIndex = str.indexOf('-');
    const minusIndex = str.indexOf('+');
    const multiplyIndex = str.indexOf('*');

    return Math.min(
      plusIndex < 0 ? Number.MAX_SAFE_INTEGER : plusIndex,
      minusIndex < 0 ? Number.MAX_SAFE_INTEGER : minusIndex,
      multiplyIndex < 0 ? Number.MAX_SAFE_INTEGER : multiplyIndex
    );
  }

  function parseEquation(str) {
    let factor = 1;
    if (str[0] === '-') {
      factor = -1;
      str = str.slice(1);
    }
    if (isNumber(str)) return String(factor * Number(str));

    let index = getFirstSymbol(str);
    let symbol = str[index];
    const leftString = str.slice(0, index);
    const rightString = str.slice(index + 1);

    let result;
    switch (symbol) {
      case '+':
        result =
          factor * Number(parseEquation(leftString)) +
          Number(parseEquation(rightString));
        break;
      case '-':
        result =
          factor * Number(parseEquation(leftString)) -
          Number(parseEquation(rightString));
        break;
      case '*':
        result =
          factor *
          Number(parseEquation(leftString)) *
          Number(parseEquation(rightString));
        break;
    }

    console.log(str, leftString, rightString, result);
    return String(result);
  }

  function getCloseIndex(afterOpen) {
    let opneCound = 1;
    let indexClose = 0;

    for (let index = 0; index < afterOpen.length; index++) {
      if (afterOpen[index] !== '(' && afterOpen[index] !== ')') continue;
      if (afterOpen[index] === '(') {
        opneCound++;
        continue;
      }
      opneCound--; // ')'

      if (opneCound === 0) {
        indexClose = index;
        break;
      }
    }

    return indexClose;
  }

  function parseAll(str) {
    if (str.length === 0) return '';
    let indexOpen = str.indexOf('(');
    if (indexOpen === -1) {
      return Number(parseEquation(str));
    }

    const afterOpen = str.slice(indexOpen + 1);
    const indexClose = indexOpen + 1 + getCloseIndex(afterOpen);

    const beforeOpen = str.slice(0, indexOpen);
    const between = str.slice(indexOpen + 1, indexClose);
    const afterClose = str.slice(indexClose + 1);
    const afterCloseSymbol = afterClose.slice(0, 1);
    const afterCloseValue = afterClose.slice(1);

    return parseEquation(
      parseEquation(beforeOpen + parseAll(between)) +
        afterCloseSymbol +
        parseAll(afterCloseValue)
    );
  }
  // 1+(2*3)+3+3+(1+1)
  console.log(parseAll('-((5+4)*4)+(2*(4+(((2*(1+3))+1)*2)))+2'));
})();
