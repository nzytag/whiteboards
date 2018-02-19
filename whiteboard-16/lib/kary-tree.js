'use strict';

const Queue = require('./queue');

const TreeNode = class {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
};
const karyTree = class {
  constructor() {
    this.root = new TreeNode(null);
  }
  // Traverse tree
  breadthFirst(callback) {
    let q = new Queue();
    q.enqueue(this.root);
    let currentTN;
    while (q.len > 0) {
      currentTN = q.dequeue().value;
      callback(currentTN);
      if (currentTN.children.length > 0) {
        currentTN.children.map(c => q.enqueue(c));
      }
    }
  }
  insert(val, parentVal) {
    let newTN = new TreeNode(val);
    if (this.root.val === null) {
      this.root = newTN;
      return this;
    }
    this.breadthFirst(currentTN => {
      if (parentVal === currentTN.val) {
        //console.log(currentTN);
        currentTN.children.push(newTN);
        return;
      }
    });
    return this;
  }

  removeByVal(val) {
    if (this.root.val === null) {
      return this;
    }

    this.breadthFirst(currentTN => {
      if (currentTN.children.length > 0) {
        for (let i = 0; i < currentTN.children.length; i++) {
          //console.log('i ', i);
          if (currentTN.children[i].val === val) {
            currentTN.children[i].val = null;
            currentTN.children[i].children = [];
          }
        }
        return;
      }
    });
    return this;
  }
};

module.exports = karyTree;