const isNumber = (char) => /^\d$/.test(char);
const isOperator = (char) => /[-+*]/.test(char);
const getNextSymbolIndex = (str, startIndex) =>
  str.slice(startIndex).search(/[()*-+]/);
function calculate(expression) {
  var operators = [];
  let values = [];
  expression = expression.trim();
  for (var i = 0; i < expression.length; i++) {
    var char = expression[i];
    let valueLastIndex = values.length - 1;
    if (char === '(') {
      values.push([]);
      continue;
    }
    if (char === ')') {
      // Calculate the result of the nested expression and push it onto the values array
      // var nestedExpression = values.pop();
      // var nestedResult = calculateNestedExpression(nestedExpression);
      // values[valueLastIndex].push(nestedResult);
      // continue;
    }
    if (isOperator(char)) {
      operators.push(char);
      continue;
    }
    let nextSymbolIndex = getNextSymbolIndex(expression, i);
    var num = parseInt(expression.slice(i, nextSymbolIndex));
    values = pushToTheValues(values, num);
    console.log(JSON.stringify(values), JSON.stringify(operators));
    i--;
  }
  // // Calculate the result of the top-level expression using the values and operators arrays
  // while (operators.length > 0) {
  //   var operator = operators.pop();
  //   var right = values.pop().pop();
  //   var left = values.pop().pop();
  //   var result = calculateOperation(left, right, operator);
  //   values[values.length - 1].push(result);
  // }
  // // The final value in the values array is the result of the expression
  // var resultString = '(' + values[0][0].toString() + ')';
  // return resultString;
}
function pushToTheValues(values, value) {
  const lastIndex = values.length - 1;
  if (Array.isArray(values[lastIndex])) {
    values[lastIndex].push(value);
  } else {
    values.push(value);
  }
  return values;
}
function calculateNestedExpression(nestedExpression) {
  // Calculate the result of the nested expression using a recursive call to the calculate function
  var nestedExpressionString = nestedExpression
    .map(function (element) {
      if (Array.isArray(element)) {
        return calculateNestedExpression(element);
      } else {
        return element.toString();
      }
    })
    .join('');
  var nestedResult = calculate(nestedExpressionString);
  return nestedResult;
}
function calculateOperation(left, right, operator) {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
  }
}
console.log(calculate('1+(1+3)+3+2+4'));
// [
//   ['', 0],
//   ['1', 1],
//   ['11', 11],
//   ['1+1', 2],
//   ['+1+1', 2],
//   ['-1', -1],
//   ['+1', 1],
//   ['+1+1+1', 3],
// ]
//   .map(([str, value]: (string | number)[]) => [
//     calculate(str as string) === value,
//     JSON.stringify(str),
//     JSON.stringify(calculate(str as string)),
//     value,
//   ])
//   .filter(([isValid]) => !isValid)
//   .forEach((el) => console.log(...el));
