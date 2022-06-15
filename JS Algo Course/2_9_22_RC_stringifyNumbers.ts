// The Function that stringify numbers
// inputs object
// output object with numbers converted to the string

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// The pattern - Recursion
// base case
// recursion call

// Write the steps
// Ask for the help

// null Check
// copy the object
// recursevly iterate the object and update the values
// return the new object at the end

// Check null
// Check 0 or empty
// Check result simple
// Check complicate
// Check complex

// Code simples
// Ask for the help
// Code harder

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "number") {
      newObj[key] = "" + val;
      continue;
    }

    if (!Array.isArray(val) && typeof val === "object" && val) {
      newObj[key] = stringifyNumbers(val);
      continue;
    }

    newObj[key] = val;
  }

  return newObj;
}

// Check null
// Check 0 or empty
// Check result simple {}
// Check complicate {a:1} {b: ''} {a:{a:1}}
// Check complex {a:{a:{a:1}}}

// FIXED MISTAKES 2
// GOT ERROS 2

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
