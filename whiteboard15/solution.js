'use strict';

const Stack = require('./lib/stack.js');
const SLL = require('./lib/sll.js');

const dedupe = module.exports = function (list) { // O(n), iterates once
  if (!list.value) return null;

  let stack = new Stack;
  let result = new SLL;

  for (let current = list; current; current = current.next) {
    if (!stack.top || current.value !== stack.top.value) {
      result.insertEnd(stack.push(current.value));
    }
  }
  return result;
};