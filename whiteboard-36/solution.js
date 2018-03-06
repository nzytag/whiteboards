'use strict';

module.exports = new class {
  isEqual(tree1, tree2) {
    if (!tree1 || !tree1 || typeof tree1 === 'string' || typeof tree2 === 'string')
      return null;
    tree1.inOrderTraversal();
    tree2.inOrderTraversal();

    if (tree1.match.toString() !== tree2.match.toString()) {
      return false;
    } else {
      return true;
    }
  }
};
