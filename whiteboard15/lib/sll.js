'use strict';

const Node = require('./node.js');

module.exports = class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(value) { 
    if (value === null) return null; 
    let newNode = new Node(value); 
    newNode.next = this.head; 
    this.head = newNode; 
    return this; 
  }

  insertEnd(value) { 
    if (value === null) return null; 
    let newNode = new Node(value); 
    if (this.head === null) { 
      this.head = newNode;
      return this; 
    } 
    let currentNode = this.head; 
    while (currentNode.next !== null) { 
      currentNode = currentNode.next; 
    } 
    currentNode.next = newNode; 
    return this; 
  }

  remove(offset) { 
    let currentNode = this.head; 
    let previousNode = null; 
    while (offset > 0) { 
      if (currentNode === null) { 
        return null;
      } 
      offset--; 
      previousNode = currentNode; 
      currentNode = currentNode.next; 
    } 
    if (this.head === currentNode) {
      this.head = currentNode.next; 
      currentNode.next = null; 
      return this; 
    } 
    previousNode.next = currentNode.next; 
    currentNode.next = null; 
    return this; 
  }

  reverse() { 
    let currentNode = this.head; 
    let previousNode = null;
    let nextNode; 
    while (currentNode !== null) { 
      nextNode = currentNode.next; 
      currentNode.next = previousNode; 
      previousNode = currentNode; 
      currentNode = nextNode; 
    } 
    this.head = previousNode; 
    return this;
  }

  findNthNodeFromEnd(n) { 
    let currentNode = this.head; 
    let length = 0; 
    while (currentNode.next !== null) { 
      length++; 
      currentNode = currentNode.next; 
    } 
    if (n > length) return null; 
    currentNode = this.head; 
    let distance = length - n; 
    while (distance > 0) { 
      distance--; 
      currentNode = currentNode.next; 
    } 
    return currentNode; 
  }
};