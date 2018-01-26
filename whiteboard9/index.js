'use strict';

const solution = module.exports = {};

solution.find = function (offset, SLL) {
  if (!SLL || typeof SLL !== 'object' || typeof offset !== 'number') return null;
  let counter = 1;
  for (var itr = SLL.head; itr.next; itr = itr.next) {
    counter++;
  }
  let diff = counter - offset;
  if (diff < 1 || typeof diff !== 'number') return null;
  let curr = SLL.head;
  for (let i = 1; i < diff; i++) {
    curr = curr.next;
    if (!curr) return 'this node does not exist';
  }
  return curr;
};