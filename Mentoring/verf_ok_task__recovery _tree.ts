/**
 * Checks is value number
 *
 * @param {any} value
 * @return {boolean}
 */
const isNumber = value => !isNaN(value);

/**
 * Definition for a binary tree node.
 * @param {number} value
 */
function TreeNode(value) {
  this.val = value;
  this.left = this.right = null;
}

const STATE = {
  INIT_STATE: 'INIT_STATE',
  GET_LEVELS: 'GET_LEVELS',
  GET_NUMBER: 'GET_NUMBER',
};


/**
 * Tree as state machine
 * @param {string} value
 * @return {{next(*=): void, getTree(): void, level: number, tree: null,
 *     complete()}}
 */
const getTree = () => {
  return {
    root: null,
    level: 0,
    state: STATE.INIT_STATE,
    valueString: '',
    getRoot: function () {
      return this.root;
    },
    complete: function () {
      if (!this.valueString) {
        return
      };

      this.saveCurrentNode();
      this.level = 0;
    },
    next: function (char) {
      // first symbols and creating root element
      if (this.state === STATE.INIT_STATE) {
        if (!isNumber(char)) {
          console.error('Error: first character should be number');
          return;
        } else {
          this.state = STATE.GET_NUMBER;
        }
      }

      if (this.state === STATE.GET_LEVELS) {
        // Adding levels
        if (!isNumber(char)) {
          this.level++;
          return;
        }

        // Adding symbols to number with level definded
        if (isNumber(char)) {
          this.valueString += char;
          this.state = STATE.GET_NUMBER;
          return;
        }
      }


      if (this.state === STATE.GET_NUMBER) {
        // Adding symbols to number with level definded
        if (isNumber(char)) {
          this.valueString += char;
          return;
        }

        // Adding node
        if (!isNumber(char) && this.valueString.length > 0) {
          this.saveCurrentNode();
          this.level = 1;
          this.state = STATE.GET_LEVELS;
          return;
        }
      }
    },
    addNode: function (newNode, parent) {
      if (!parent) {
        return newNode;
      }

      this.level--;
      if (this.level === 0) {
        if (!parent.left) {
          parent.left = newNode;
        } else if (!parent.right) {
          parent.right = newNode;
        } else {
          throw new Error('MAX AMOUT OF ELEMENTS ON LEVEL IS EXCEEDED');
        }

      } else {
        if (!!parent.right) {
          this.addNode(newNode, parent.right);
        } else {
          this.addNode(newNode, parent.left);
        }
      }
      return parent;
    },
    saveCurrentNode: function () {
      const newNode = new TreeNode(Number(this.valueString));
      this.root = this.addNode(newNode, this.root);
      this.valueString = '';
    }

  };
};


/**
 * @param {string} string
 * @return {TreeNode}
 */
let recoverFromPreorder = (inputString) => {
  const tree = getTree();

  for (let i = 0; i < inputString.length; i++) {
    tree.next(inputString[i]);
  }
  tree.complete();

  return tree.getRoot();
};
