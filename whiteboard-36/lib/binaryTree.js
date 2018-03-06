'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.match = [];
  }

  inOrderTraversal() {
    if (!this.root) return null;
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(root) {
    if (root === null) return null;

    root.left !== null ? this.match.push(true) : this.match.push(false);
    this._inOrderTraversal(root.left);

    this._inOrderTraversal(root.right);
    root.right !== null ? this.match.push(true) : this.match.push(false);
  }
}

module.exports = BinaryTree;
