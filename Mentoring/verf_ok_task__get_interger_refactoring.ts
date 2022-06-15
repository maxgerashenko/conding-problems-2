/**
  Get integer
  Only the space character ' ' is considered as whitespace character.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 */

const getInterger = (number) => {
  return (number > 2147483647)
    ? 2147483647
    : (number < -2147483648)
      ? -2147483648
      : number
}

// ASCII code 56-50
const isDigit = char => !isNaN(char) && char !== ' ';
const isSpace = char => char === ' ';
const isSign = char => (char === '+' || char === '-')

let STATE = {
  NOT_STARTED: 'NOT_STARTED',
  NUM_STARTED: 'NUM_STARTED',
  HAS_NUBMER: 'HAS_NUBMER',
  INVALID: 'INVALID',
  DONE: 'DONE',
}

const notStartedCheck = (char) => {
  let number = '';
  let state = STATE.INVALID;

  if (isSpace(char)) {
    state = STATE.NOT_STARTED;
  }

  if (isSign(char)) {
    state = STATE.NUM_STARTED;
    number = char;
  }

  if (isDigit(char)) {
    state = STATE.HAS_NUBMER;
    number = char;
  }

  return { state, number };
}

const numStartedCheck = char => {
  let state = STATE.INVALID;
  let number = '';

  if (isDigit(char)) {
    state = STATE.HAS_NUBMER;
    number = char;
  }

  return { state, number }
};

const hasNumberCheck = char => {
  let state = STATE.DONE;
  let number = '';

  if (isDigit(char)) {
    state = STATE.HAS_NUBMER;
    number = char;
  }

  return { state, number };
};

function getStateMachine() {
  return {
    state: STATE.NOT_STARTED,
    currentNumber: '',
    next: function (symbol) {
      switch (this.state) {
        case STATE.NOT_STARTED: {
          let result = notStartedCheck(symbol);
          this.state = result.state;
          this.currentNumber = this.currentNumber + result.number;
          break;
        }
        case STATE.HAS_NUBMER: {
          let result = hasNumberCheck(symbol);
          this.state = result.state;
          this.currentNumber = this.currentNumber + result.number;
          break;
        }
        case STATE.NUM_STARTED: {
          let result = numStartedCheck(symbol);
          this.state = result.state;
          this.currentNumber = this.currentNumber + result.number;
          break;
        }
      }

      if (this.state === STATE.INVALID) {
        this.currentNumber = 0;
        return;
      }

      if (this.state === STATE.DONE) {
        return;
      }

      if (this.state === STATE.NUM_STARTED) {
        return;
      }
    },

    getCurrentNumber: function () {
      switch (this.state) {
        case STATE.NUM_STARTED: {
          return 0;
        }
        case STATE.NUM_STARTED: {
          return 0;
        }
        default: {
          return getInterger(Number(this.currentNumber))
        }
      }
    }
  }
}

const myAtoi = (inputString) => {
  let inputStringCopy = inputString;
  const StateMachine = getStateMachine();

  let symbol;
  while (inputStringCopy.length > 0) {
    symbol = inputStringCopy.slice(0, 1);
    inputStringCopy = inputStringCopy.slice(1);

    StateMachine.next(symbol);
  }
}
