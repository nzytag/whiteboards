'use strict';

const kTree = require('../lib/k-ary-tree');


// returns a node that has max children in tree 
function maxChild(tree) {
  if (!(tree instanceof kTree)) throw new Error('Input needs to be tree instance');
  if (tree.root.val === null) return null;

  let max = null;
  let children = 0;

  tree.breadthFirst(currentTN => {
    if (currentTN.val !== null) {
      if (currentTN.children.length > children) {
        max = currentTN;
        children = currentTN.children.length;
      }
    }
  });

  return max;
}

module.exports = maxChild;