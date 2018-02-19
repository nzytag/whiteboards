'use strict';

const kTree = require('../lib/kary-tree');


// returns a sum of values in tree 
function sumOfChildren(tree) {
  if (!(tree instanceof kTree)) throw new Error('Input needs to be tree instance');
  if (tree.root.val === null) return null;

  let sum = 0;

  tree.breadthFirst(currentTN => {
    if (currentTN.val !== null) {
      sum += currentTN.val;
    }
  });

  return sum;
}

module.exports = sumOfChildren;