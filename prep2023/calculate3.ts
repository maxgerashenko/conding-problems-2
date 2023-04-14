(() => {
  const isNumber = (char) => /^\d$/.test(char);
  const isOperator = (char) => /[-+*]/.test(char);

  function calculate(expression) {
    var operators = [];
    var values = [];

    expression = expression.replace(/\s/g, '');

    for (var i = 0; i < expression.length; i++) {
      var char = expression[i];
      if (char === '(') {
        values.push([]);
        continue;
      }
      if (char === ')') {
        // Calculate the result of the nested expression and push it onto the values array
        var nestedExpression = values.pop();
        var nestedResult = calculateNestedExpression(nestedExpression);
        values[values.length - 1].push(nestedResult);
        continue;
      }
      if (isOperator(char)) {
        // Push the operator onto the operators array
        operators.push(char);
        continue;
      }

      // Parse the number and push it onto the values array
      var startIndex = i;
      while (i < expression.length && isNumber(expression[i])) {
        i++;
      }
      var num = parseFloat(expression.substring(startIndex, i));
      values[values.length - 1].push(num);
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
    // Perform the calculation based on the operator
    var result;
    switch (operator) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
        break;
    }
    return result;
  }

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

  calculate('1');
})();
