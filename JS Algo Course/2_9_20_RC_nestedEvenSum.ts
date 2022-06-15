// The Function nestedEvenSum return sum of even numbers
// inputs object with nested objects
// output retunr number that is sum of all numbers in object

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

// The pattern - Recursion
// check null
// base case
// recursion

// Write the steps
// Ask for the help

// obj
// if object undefined return 0;
// when obj is number and even retur number;
// if obj is object Object for all value call retuctions
// return recursion

// Code simples
// Ask for the help
// Code harder

function nestedEvenSum(val) {
  if (val == null) return 0; //O(value)
  if (typeof val === "object") {
    //O(n)
    return Object.values(val).reduce(
      (prev, cur) => prev + nestedEvenSum(cur), //O(1)
      0
    ); //O(n)
  }
  if (Number.isInteger(val) && val % 2 === 0) return val; //O(1)
  return 0;
} // O(n^2)

// Check null 0
// Check 0 or empty 0
// Check result simple {}
// Check complicate {2} // 2 {3} //0
// Check complex {2{2{3}}} // 4

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
